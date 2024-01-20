package io.milchr.todo.service;

import io.milchr.todo.entity.auth.UserEntity;
import io.milchr.todo.mapper.UserMapper;
import io.milchr.todo.model.AuthUser;
import io.milchr.todo.repository.UserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class AuthService implements IAuthService {
    private final UserRepository userRepository;
    private final UserMapper mapper;
    private final AuthenticationManager authenticationManager;

    @Transactional
    public void register(AuthUser authUser) {
        log.info("register");
        UserEntity userEntity = mapper.convert(authUser);
        userRepository.save(userEntity);
    }

    public AuthUser authenticate(AuthUser authUser) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        authUser.getUsername(),
                        authUser.getPassword()
                )
        );
        UserEntity user = userRepository.findByLogin(authUser.getUsername()).orElseThrow();
        log.info(user.toString());
        return mapper.mapToModel(user);
    }
}
