package io.milchr.todo.service;

import io.milchr.todo.model.AuthUser;

public interface IAuthService {
    void register(AuthUser authUser);
}
