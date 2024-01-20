package io.milchr.todo.controller;

import io.milchr.todo.model.AuthUser;
import io.milchr.todo.service.IAuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(value = "*", maxAge = 1800)
@RestController
@RequestMapping("auth")
@RequiredArgsConstructor
public class AuthController {
    private final IAuthService authService;

    @PostMapping("register")
    public void register(@RequestBody AuthUser authUser) {
        authService.register(authUser);
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthUser> authenticate(@RequestBody AuthUser request) {
        return ResponseEntity.ok(authService.authenticate(request));
    }
}
