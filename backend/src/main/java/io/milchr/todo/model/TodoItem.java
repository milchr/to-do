package io.milchr.todo.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class TodoItem {
    private Long id;
    private String title;
    private String description;
    private Boolean isDone;
}
