package io.milchr.todo.entity.auth;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "APP_USER")
public class UserEntity {
    @Id
    @Column(name = "ID")
    @GeneratedValue
    private Long id;

    @Column(name = "LOGIN")
    private String login;

    @Column(name = "PASSWORD")
    private String password;
}
