type TodoFormProps = {
    input: string;
    setInput: (value: string) => void;
    addTodo: () => void;
};

function TodoForm({
    input,
    setInput,
    addTodo,
    }: TodoFormProps) {
    return (
        <div>
        <input
            value={input}
            onChange={(e) =>
            setInput(e.target.value)
            }
            placeholder="やることを入力"
        />

        <button onClick={addTodo}>
            追加
        </button>
        </div>
    );
}

export default TodoForm;