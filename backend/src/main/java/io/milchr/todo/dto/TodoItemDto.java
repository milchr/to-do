package io.milchr.todo.dto;

import lombok.Data;

@Data
public class TodoItemDto {
    private Long id;
    private String title;
    private String description;
    private Boolean isDone;
}
