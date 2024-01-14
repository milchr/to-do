package io.milchr.todo.controller;

import io.milchr.todo.facade.TodoItemFacade;
import io.milchr.todo.mapper.TodoItemMapper;
import io.milchr.todo.model.TodoItem;
import io.milchr.todo.model.TodoPage;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("api/todoItem")
@RequiredArgsConstructor
public class TodoController {
    private final TodoItemFacade todoItemFacade;

    @GetMapping("{id}")
    public TodoItem getTodoItem(@PathVariable Long id) {
        return todoItemFacade.getTodoItem(id);
    }

    @GetMapping
    public TodoPage<TodoItem> getTodoItem(@RequestParam(required = false) Integer pageNumber) {
        return todoItemFacade.search(pageNumber);
    }

    @PostMapping
    public TodoItem createTodoItem(@RequestBody TodoItem todoItem) {
        return todoItemFacade.createTodoItem(todoItem);
    }

    @PatchMapping
    public TodoItem updateTodoItem(@RequestBody TodoItem todoItem) {
        return todoItemFacade.updateTodoItem(todoItem);
    }
}
