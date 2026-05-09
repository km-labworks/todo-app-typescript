import type { Todo } from "./Todo.ts";

/**
 * Todoを管理するクラス
 * Todoの追加・取得・完了・削除の処理を担当する
 */
export class TodoApp {

    /** Todoを保存する配列 */
    private todos: Todo[] = []

    constructor() {
        const saved = localStorage.getItem("todos")
        if (saved) {
            this.todos = JSON.parse(saved)
        }
    }
    /**
    * Todoを追加する
    * @param title Todoのタイトル
    */
    addTodo(title: string){ 

    if (title.trim() === "") {
        throw new Error("タイトルが空です")
    }
        const todo: Todo = {
            id: Date.now(),
            title,
            completed: false
        }

        this.todos.push(todo)
        this.save()
    }

    /**
   * Todo一覧を取得する
   * @returns Todo配列
   */
    getTodos(): Todo[] {
        return [...this.todos]
    }

    private save() {

        localStorage.setItem(
            "todos",
            JSON.stringify(this.todos)
        )
    }
    /**
   * Todoを完了状態にする
   * @param id 完了させたいTodoのID
   */
    toggleTodo(id: number) {

        const todo = this.todos.find(t => t.id === id)

    if (todo) {
        todo.completed = !todo.completed
        this.save()
    }

    }
    /**
   * Todoを削除する
   * @param id 削除するTodoのID
   */
    deleteTodo(id: number) {

        this.todos = this.todos.filter(todo => todo.id !== id)
        this.save()
    }
}