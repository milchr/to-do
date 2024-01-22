package io.milchr.todo.rest.controller;

import io.milchr.todo.model.AuthResponse;
import io.milchr.todo.model.AuthUser;
import io.milchr.todo.service.IAuthService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
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

    @PostMapping("authenticate")
    public ResponseEntity<AuthResponse> authenticate(@RequestBody AuthUser request) {
        return ResponseEntity.ok(authService.authenticate(request));
    }

    @PostMapping("logout")
    public ResponseEntity<?> performLogout(@RequestBody AuthUser user, HttpServletRequest request, HttpServletResponse response) {
        log.info("logout");
        authService.logout(request, response, user);
        return ResponseEntity.ok().build();
    }
}
