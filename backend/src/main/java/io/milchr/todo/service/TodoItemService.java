package io.milchr.todo.service;

import io.milchr.todo.repository.TodoItemRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class TodoItemService {
    private final TodoItemRepository todoItemRepository;
}
