package io.milchr.todo.service;

import io.milchr.todo.entity.auth.TokenEntity;
import io.milchr.todo.entity.auth.UserEntity;
import io.milchr.todo.enumeration.TokenType;
import io.milchr.todo.mapper.UserMapper;
import io.milchr.todo.model.AuthResponse;
import io.milchr.todo.model.AuthUser;
import io.milchr.todo.repository.TokenRepository;
import io.milchr.todo.repository.UserRepository;
import io.milchr.todo.security.jwt.JwtUtils;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;

import static java.util.Objects.isNull;
import static java.util.Objects.nonNull;

@Slf4j
@Service
@RequiredArgsConstructor
public class AuthService implements IAuthService {
    private final UserRepository userRepository;
    private final TokenRepository tokenRepository;
    private final UserMapper mapper;
    private final AuthenticationManager authenticationManager;
    private final JwtUtils jwtUtils;

    @Transactional
    public void register(AuthUser authUser) {
        log.info("register");
        UserEntity userEntity = mapper.convert(authUser);
        userRepository.save(userEntity);
    }

    @Transactional
    public AuthResponse authenticate(AuthUser authUser) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        authUser.getUsername(),
                        authUser.getPassword()
                )
        );
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);
        UserEntity userEntity = userRepository.findByLogin(authUser.getUsername()).orElseThrow();
        revokeAllUserTokens(userEntity);
        saveUserToken(userEntity, jwt);

        return new AuthResponse(userEntity.getLogin(), jwt);
    }

    private void saveUserToken(UserEntity user, String jwtToken) {
        var token = TokenEntity.builder()
                .user(user)
                .token(jwtToken)
                .tokenType(TokenType.BEARER)
                .expired(false)
                .revoked(false)
                .build();
        tokenRepository.save(token);
    }

    private void revokeAllUserTokens(UserEntity user) {
        List<TokenEntity> validUserTokens = tokenRepository.findAllValidTokenByUser(user.getId());
        if (validUserTokens.isEmpty())
            return;
        validUserTokens.forEach(token -> {
            token.setExpired(true);
            token.setRevoked(true);
        });
        tokenRepository.saveAll(validUserTokens);
    }

    @Transactional
    public void logout(HttpServletRequest request, HttpServletResponse response, AuthUser authUser) {
        final String authHeader = request.getHeader("Authorization");
        final String jwt;
        if (isNull(authHeader) || !authHeader.startsWith("Bearer ")) {
            return;
        }
        jwt = authHeader.substring(7);
        TokenEntity storedToken = tokenRepository.findByToken(jwt)
                .orElse(null);
        if (nonNull(storedToken)) {
            storedToken.setExpired(true);
            storedToken.setRevoked(true);
            tokenRepository.save(storedToken);
            SecurityContextHolder.clearContext();
        }
    }


}
