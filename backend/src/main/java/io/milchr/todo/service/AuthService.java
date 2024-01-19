package io.milchr.todo.service;

import io.milchr.todo.model.AuthUser;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class AuthService implements IAuthService {

    public void register(AuthUser authUser) {
        log.info("register");

    }
}
