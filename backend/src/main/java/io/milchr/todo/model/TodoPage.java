package io.milchr.todo.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
public class TodoPage<T> {
    List<T> content;
    private Integer pageNumber;
    public Integer pageSize;
    public long totalElements;
    public long totalPages;
}
