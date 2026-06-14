import TodoItem from "./TodoItem";
import type { Todo } from "../types/Todo";

type TodoListProps = {
    todos: Todo[];
    toggleTodo: (id: number) => void;
    deleteTodo: (index: number) => void;
};

function TodoList({
    todos,
    toggleTodo,
    deleteTodo,
    }: TodoListProps) {

    const sortedTodos = [...todos].sort(
    (a, b) => Number(a.completed) - Number(b.completed)
    );

    return (
        <ul>
        {sortedTodos.map((todo, index) => (
            <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onDelete={() =>
                deleteTodo(index)
            }
            />
        ))}
        </ul>
    );
}

export default TodoList;