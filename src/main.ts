import { TodoApp } from "./TodoApp.ts"

/** Todoアプリのインスタンス */
const app = new TodoApp()

/** 入力欄 */
const input = document.getElementById("todo-input") as HTMLInputElement

/** 追加ボタン */
const button = document.getElementById("add-button") as HTMLButtonElement

/** Todoリスト */
const list = document.getElementById("todo-list") as HTMLUListElement

/**
 * 追加ボタンがクリックされたときの処理
 */
button.addEventListener("click", () => {
  try {
    app.addTodo(input.value)
    input.value = ""
    render()
  } catch (error) {
    alert("タイトルを入力してください")
  }
})

/*
* Enterキー追加
*/
input.addEventListener("keydown", (event) => {

  if (event.key === "Enter") {
    button.click()
  }

})

/**
 * Todoリストを画面に描画する関数
 */
function render() {

  list.innerHTML = ""

  const todos = app.getTodos()

  todos.sort((a, b) => {
  return Number(a.completed) - Number(b.completed)
  })

  todos.forEach(todo => {

    const li = document.createElement("li")

    const span = document.createElement("span")
    span.textContent = todo.title

    if (todo.completed) {
      span.classList.add("completed")
    }

const completeButton = document.createElement("button")
completeButton.classList.add("complete-btn")
completeButton.textContent = todo.completed ? "戻す" : "完了"

    completeButton.onclick = () => {
      app.toggleTodo(todo.id)
      render()
    }

    const deleteButton = document.createElement("button")
    deleteButton.classList.add("delete-btn")
    deleteButton.textContent = "削除"

    deleteButton.onclick = () => {
      app.deleteTodo(todo.id)
      render()
    }

    li.appendChild(span)
    li.appendChild(completeButton)
    li.appendChild(deleteButton)

    list.appendChild(li)

  })

}