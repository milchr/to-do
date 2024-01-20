package io.milchr.todo.repository;

import io.milchr.todo.entity.auth.TokenEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TokenRepository extends JpaRepository<TokenEntity, Long> {
    Optional<TokenEntity> findByToken(String token);

    @Query(value = "SELECT * FROM TOKEN WHERE USER_ID = :id AND REVOKED = false AND EXPIRED = false", nativeQuery = true)
    List<TokenEntity> findAllValidTokenByUser(@Param("id") Long userId);
}
