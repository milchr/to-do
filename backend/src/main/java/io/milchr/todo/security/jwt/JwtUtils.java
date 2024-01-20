package io.milchr.todo.security.jwt;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.DecodedJWT;
import io.milchr.todo.security.auth.UserPrincipal;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.util.Date;

@Slf4j
@Component
public class JwtUtils {
    @Value("${app.security.jwt.secret-key}")
    private String jwtSecret;

    @Value("${app.security.jwt.expire-time}")
    private Integer jwtExpireTime;

    public String generateJwtToken(Authentication authentication) {
        UserPrincipal userPrincipal = (UserPrincipal) authentication.getPrincipal();
        Algorithm algorithm = Algorithm.HMAC256(jwtSecret);

        return JWT.create().withSubject((userPrincipal.getUsername()))
                .withIssuer("auth0")
                .withIssuedAt(new Date())
                .withExpiresAt(new Date((new Date()).getTime() + jwtExpireTime))
                .sign(algorithm);
    }

    public String getUserNameFromJwtToken(String token) {
        DecodedJWT jwt = JWT.decode(token);

        return jwt.getSubject();
    }

    public boolean validateJwtToken(String authToken) {
        try {
            Algorithm algorithm = Algorithm.HMAC256(jwtSecret);
            JWTVerifier verifier = JWT.require(algorithm)
                    .withIssuer("auth0")
                    .build();
            DecodedJWT jwt = verifier.verify(authToken);
            return true;
        } catch (JWTVerificationException exception) {
            log.error("invalid jwt");
        }

        return false;
    }
}
