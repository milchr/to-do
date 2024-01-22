package io.milchr.todo.mapper;

import io.milchr.todo.dto.TodoItemDto;
import io.milchr.todo.entity.TodoItemEntity;
import io.milchr.todo.model.TodoItem;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

import java.util.List;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface TodoItemMapper {
    @Mapping(source = "isDone", target = "done")
    TodoItem mapEntityToModel(TodoItemEntity todoItemEntity);
    @Mapping(source = "isDone", target = "done")
    List<TodoItem> mapEntityToModel(List<TodoItemEntity> todoItemEntities);
    TodoItemDto mapEntityToDto(TodoItemEntity todoItemEntity);
    @Mapping(source = "done", target = "isDone")
    TodoItemDto mapModelToDto(TodoItem todoItem);
    TodoItem mapDtoToModel(TodoItemDto todoItemDto);
    TodoItemEntity mapDtoToEntity(TodoItemDto todoItemDto);
}
