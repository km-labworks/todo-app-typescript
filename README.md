# Todo App

TypeScriptで作成したTodoアプリです。

クラス設計・状態管理・LocalStorageによる永続化など、
実務を意識して実装しました。

---

## Features

- Todo追加
- Todo削除
- 完了 / 未完了切り替え
- 完了済みTodoの自動並び替え
- LocalStorage保存
- Enterキー追加対応
- 空文字バリデーション

---

## Tech Stack

- TypeScript
- Vite
- HTML
- CSS
- LocalStorage API

---

## Architecture

### Todo型を分離

```ts
export type Todo = {
  id: number
  title: string
  completed: boolean
}

## 学習内容

- DOM操作
- クラス設計
- LocalStorage
- 配列操作
- 例外処理
