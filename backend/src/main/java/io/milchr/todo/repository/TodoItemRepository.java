package io.milchr.todo.repository;

import io.milchr.todo.entity.TodoItemEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TodoItemRepository extends JpaRepository<TodoItemEntity, Long> {
}
