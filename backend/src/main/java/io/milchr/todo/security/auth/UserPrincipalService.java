package io.milchr.todo.security.auth;

import io.milchr.todo.entity.auth.UserEntity;
import io.milchr.todo.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserPrincipalService implements UserDetailsService {
    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserEntity userEntity = userRepository.findByLogin(username)
                .orElseThrow(() -> new UsernameNotFoundException("User with username " + username + " not found"));
        return UserPrincipal.build(userEntity);
    }
}
