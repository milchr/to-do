package io.milchr.todo.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class TodoItem {
    @Schema(description = "Id", example = "123")
    private Long id;

    @NotNull
    @Schema(description = "Todo item title", example = "test")
    private String title;

    @NotNull
    @Schema(description = "Todo item description", example = "test")
    private String description;

    @Schema(description = "Todo item state", example = "true")
    private Boolean isDone;
}
