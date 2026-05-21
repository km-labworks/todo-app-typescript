import { describe, it, expect, beforeEach } from "vitest"
import { TodoApp } from "../src/TodoApp"

describe("TodoApp", () => {

    beforeEach(() => {
        localStorage.clear()
    })

    it("Todoを追加できる", () => {

        const app = new TodoApp()

        app.addTodo("宿題")

        const todos = app.getTodos()

        expect(todos.length).toBe(1)
        expect(todos[0].title).toBe("宿題")
        expect(todos[0].completed).toBe(false)

    })
    it("空文字ならエラー", () => {

    const app = new TodoApp()

    expect(() => {
        app.addTodo("")
    }).toThrow()

    })
    it("Todoを完了状態にできる", () => {

    const app = new TodoApp()

    app.addTodo("宿題")

    const todo = app.getTodos()[0]

    app.toggleTodo(todo.id)

    expect(app.getTodos()[0].completed).toBe(true)

    })

    it("Todoを削除できる", () => {

    const app = new TodoApp()

    app.addTodo("宿題")

    const todo = app.getTodos()[0]

    app.deleteTodo(todo.id)

    expect(app.getTodos().length).toBe(0)

    })

})