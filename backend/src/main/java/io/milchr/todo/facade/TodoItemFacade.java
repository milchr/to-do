package io.milchr.todo.facade;

import io.milchr.todo.entity.TodoItemEntity;
import io.milchr.todo.mapper.TodoItemMapper;
import io.milchr.todo.model.TodoItem;
import io.milchr.todo.model.TodoPage;
import io.milchr.todo.service.TodoItemService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class TodoItemFacade {
    private final TodoItemService todoItemService;
    private final TodoItemMapper mapper;

    public TodoItem getTodoItem(Long id) {
        return mapper.mapEntityToModel(todoItemService.get(id));
    }

    public TodoPage<TodoItem> search(Integer pageNumber) {
        Page<TodoItemEntity> page = todoItemService.findPage(pageNumber);
        return TodoPage.<TodoItem>builder()
                .content(mapper.mapEntityToModel(page.getContent()))
                .pageNumber(page.getNumber())
                .pageSize(page.getSize())
                .totalElements(page.getTotalElements())
                .totalPages(page.getTotalPages())
                .build();
    }

    @Transactional
    public TodoItem createTodoItem(TodoItem todoItem) {
        log.info("createTodoItem -> {}", todoItem);
        TodoItemEntity todoItemEntity = mapper.mapDtoToEntity(mapper.mapModelToDto(todoItem));
        todoItemService.save(todoItemEntity);
        return mapper.mapEntityToModel(todoItemEntity);
    }

    @Transactional
    public TodoItem updateTodoItem(TodoItem todoItem) {
        log.info("updateTodoItem -> {}", todoItem);
        TodoItemEntity todoItemEntity = mapper.mapDtoToEntity(mapper.mapModelToDto(todoItem));
        todoItemService.save(todoItemEntity);
        return mapper.mapEntityToModel(todoItemEntity);
    }

    public void deleteTodoItem(Long id) {
        log.info("deleteTodoItem -> {}", id);
        todoItemService.delete(id);
    }
}
