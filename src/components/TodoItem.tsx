import type { Todo } from "../types/Todo";

type TodoItemProps = {
    todo: Todo;
    onToggle: (id: number) => void;
    onDelete: () => void;
};

function TodoItem({
    todo,
    onToggle,
    onDelete,
    }: TodoItemProps) {
    return (
        <li>
        <span
            style={{
            textDecoration: todo.completed
                ? "line-through"
                : "none",
            }}
        >
            {todo.title}
        </span>

        <button
            onClick={() =>
            onToggle(todo.id)
            }
        >
            {todo.completed
            ? "戻す"
            : "完了"}
        </button>

        <button onClick={onDelete}>
            削除
        </button>
        </li>
    );
    }

export default TodoItem;