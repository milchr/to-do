package io.milchr.todo.service;

import io.milchr.todo.model.AuthResponse;
import io.milchr.todo.model.AuthUser;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public interface IAuthService {
    void register(AuthUser authUser);

    AuthResponse authenticate(AuthUser authUser);

    void logout(HttpServletRequest request, HttpServletResponse response, AuthUser authUser);

}
