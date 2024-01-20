package io.milchr.todo.entity.auth;


import io.milchr.todo.enumeration.TokenType;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "TOKEN")
public class TokenEntity {
    @Id
    @GeneratedValue
    public Long id;

    @Column(name = "TOKEN", unique = true)
    public String token;

    @Enumerated(EnumType.STRING)
    @Column(name = "TYPE")
    public TokenType tokenType = TokenType.BEARER;

    @Column(name = "REVOKED")
    public boolean revoked;

    @Column(name = "EXPIRED")
    public boolean expired;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USER_ID", referencedColumnName = "ID")
    public UserEntity user;
}