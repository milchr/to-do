package io.milchr.todo.controller;

import io.milchr.todo.facade.TodoItemFacade;
import io.milchr.todo.model.TodoItem;
import io.milchr.todo.model.TodoPage;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@Slf4j
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/todoItem")
@RequiredArgsConstructor
public class TodoController {
    private final TodoItemFacade todoItemFacade;

    @GetMapping("{id}")
    public TodoItem getTodoItem(@PathVariable Long id) {
        log.info("getTodoItem invoked");
        return todoItemFacade.getTodoItem(id);
    }

    @GetMapping
    public TodoPage<TodoItem> getTodoItems(@RequestParam(required = false) Integer pageNumber) {
        log.info("getTodoItems invoked");
        return todoItemFacade.search(pageNumber);
    }

    @PostMapping
    public TodoItem createTodoItem(@RequestBody TodoItem todoItem) {
        log.info("createTodoItem invoked");
        return todoItemFacade.createTodoItem(todoItem);
    }

    @PatchMapping
    public TodoItem updateTodoItem(@RequestBody TodoItem todoItem) {
        log.info("updateTodoItem invoked");
        return todoItemFacade.updateTodoItem(todoItem);
    }

    @DeleteMapping("{id}")
    public void deleteTodoItem(@PathVariable Long id) {
        log.info("deleteTodoItem invoked");
        todoItemFacade.deleteTodoItem(id);
    }
}
