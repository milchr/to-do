package io.milchr.todo.mapper;

import io.milchr.todo.dto.TodoItemDto;
import io.milchr.todo.entity.TodoItemEntity;
import io.milchr.todo.model.TodoItem;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

import java.util.List;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface TodoItemMapper {
    TodoItem mapEntityToModel(TodoItemEntity todoItemEntity);
    List<TodoItem> mapEntityToModel(List<TodoItemEntity> todoItemEntities);
    TodoItemDto mapEntityToDto(TodoItemEntity todoItemEntity);
    TodoItemDto mapModelToDto(TodoItem todoItemDto);
    TodoItemEntity mapDtoToEntity(TodoItemDto todoItemDto);
}
