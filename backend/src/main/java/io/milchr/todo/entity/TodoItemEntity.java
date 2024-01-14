package io.milchr.todo.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "TODO_ITEM")
public class TodoItemEntity {
    @Id
    @Column(name = "ID")
    @GeneratedValue(generator="todo_item_seq", strategy = GenerationType.AUTO)
    @SequenceGenerator(name="todo_item_seq", allocationSize=1)
    private Long id;

    @Column(name = "TITLE")
    private String title;

    @Column(name = "DESCRIPTION")
    private String description;

    @Column(name = "IS_DONE")
    private Boolean isDone;
}
