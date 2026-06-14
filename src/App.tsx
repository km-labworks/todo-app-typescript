import { useEffect, useState } from "react";
import Login from "./components/Login.tsx";
import TodoForm from "./components/TodoForm.tsx";
import TodoList from "./components/TodoList.tsx";
import type { Todo } from "./types/Todo.ts";

function App() {
const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");

        return savedTodos
            ? JSON.parse(savedTodos)
            : [
                {
                id: 1,
                title: "Reactを勉強する",
                completed: false,
                },
                {
                id: 2,
                title: "TypeScriptを勉強する",
                completed: false,
                },
            ];
});

    const [input, setInput] = useState("");

    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        const saved = localStorage.getItem("isLoggedIn");
        return saved === "true";
    });

    useEffect(() => {
        localStorage.setItem(
        "todos",
        JSON.stringify(todos)
        );
    }, [todos]);

    useEffect(() => {
        localStorage.setItem(
        "isLoggedIn",
        String(isLoggedIn)
        );
    }, [isLoggedIn]);

    const addTodo = () => {
        if (input.trim() === "") {
        alert("タイトルを入力してください");
        return;
        }

        setTodos([
        ...todos,
        {
            id: Date.now(),
            title: input,
            completed: false,
        },
        ]);

        setInput("");
    };

    const deleteTodo = (indexToDelete: number) => {
        setTodos(
        todos.filter(
            (_, index) => index !== indexToDelete
        )
        );
    };

    const toggleTodo = (id: number) => {
        setTodos(
        todos.map((todo) =>
            todo.id === id
            ? {
                ...todo,
                completed: !todo.completed,
                }
            : todo
        )
        );
    };

    if (!isLoggedIn) {
        return (
        <Login
            onLogin={() => setIsLoggedIn(true)}
        />
        );
    }

    return (
        <div>
        <button
            onClick={() => {
            if (confirm("ログアウトしますか？")) {
                setIsLoggedIn(false);
            }
            }}
        >
            ログアウト
        </button>

        <h1>やることリスト</h1>

        <TodoForm
        input={input}
        setInput={setInput}
        addTodo={addTodo}
        />

        <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        />
        </div>
    );
}

export default App;