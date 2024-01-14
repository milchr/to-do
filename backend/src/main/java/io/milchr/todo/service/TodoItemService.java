package io.milchr.todo.service;

import io.milchr.todo.entity.TodoItemEntity;
import io.milchr.todo.repository.TodoItemRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class TodoItemService implements ITodoItemService {
    private final TodoItemRepository todoItemRepository;


    @Override
    public TodoItemEntity get(Long id) {
        return todoItemRepository.getReferenceById(id);
    }

    @Override
    public Page<TodoItemEntity> findPage(Integer pageNumber) {
        return todoItemRepository.findAll(PageRequest.of(pageNumber != null ? pageNumber : 0, 10));
    }

    @Override
    public TodoItemEntity save(TodoItemEntity todoItemEntity) {
        return todoItemRepository.save(todoItemEntity);
    }

    @Override
    public void delete(Long id) {
        todoItemRepository.deleteById(id);
    }
}
