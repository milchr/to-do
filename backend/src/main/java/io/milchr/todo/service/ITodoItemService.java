package io.milchr.todo.service;

import io.milchr.todo.entity.TodoItemEntity;
import org.springframework.data.domain.Page;

public interface ITodoItemService {
    TodoItemEntity get(Long id);
    Page<TodoItemEntity> findPage(Integer pageNumber);
    TodoItemEntity save(TodoItemEntity todoItemEntity);
    void delete(Long id);
}
