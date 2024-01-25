package io.milchr.todo.mapper;

import io.milchr.todo.entity.auth.UserEntity;
import io.milchr.todo.model.AuthUser;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public abstract class UserMapper {
    @Autowired
    PasswordEncoder passwordEncoder;

    public UserEntity convert(AuthUser authUser) {
        UserEntity entity = mapToEntity(authUser);
        entity.setPassword(passwordEncoder.encode(authUser.getPassword()));

        return entity;
    }

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "password", ignore = true)
    @Mapping(target = "login", source = "username")
    abstract UserEntity mapToEntity(AuthUser authUser);

    @Mapping(target = "password", ignore = true)
    @Mapping(target = "username", source = "login")
    public abstract AuthUser mapToModel(UserEntity entity);
}
