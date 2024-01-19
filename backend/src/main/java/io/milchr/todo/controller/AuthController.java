package io.milchr.todo.controller;

import io.milchr.todo.model.AuthUser;
import io.milchr.todo.service.IAuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(value = "*")
@RestController
@RequestMapping("auth")
@RequiredArgsConstructor
public class AuthController {
    private final IAuthService authService;

    @PostMapping("register")
    public void register(@RequestBody AuthUser authUser) {
        authService.register(authUser);
    }

}
