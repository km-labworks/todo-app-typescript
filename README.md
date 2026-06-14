# React × TypeScript Todo Application

ReactとTypeScriptを用いて開発したTodo管理アプリケーションです。

React Hooks（useState / useEffect）による状態管理を行い、コンポーネント分割による保守性・再利用性を意識して実装しました。

また、localStorageを利用することでTodoデータおよびログイン状態の永続化に対応しています。

---

## Features

* Todo追加
* Todo削除
* Todo完了状態切り替え
* Enterキーによる追加操作
* localStorageによるデータ永続化
* 完了済みタスクの自動ソート
* ログイン機能
* ログアウト機能
* ログイン状態保持

---

## Tech Stack

| Category         | Technology                         |
| ---------------- | ---------------------------------- |
| Frontend         | React                              |
| Language         | TypeScript                         |
| Build Tool       | Vite                               |
| State Management | React Hooks (useState / useEffect) |
| UI               | HTML / CSS                         |
| Storage          | localStorage                       |

---

## Application Overview

本アプリでは以下の機能を実装しています。

* Todo追加
* Todo削除
* Todo完了切り替え
* Enterキー追加対応
* localStorage保存
* 完了済みTodoの自動ソート
* ログイン機能
* ログアウト機能
* ログイン状態保持

---

## Directory Structure

```txt
src/
├── App.tsx
├── main.tsx
├── components/
│   ├── Login.tsx
│   ├── TodoForm.tsx
│   ├── TodoList.tsx
│   └── TodoItem.tsx
└── types/
    └── Todo.ts
```

---

## Component Design

| Component    | Responsibility |
| ------------ | -------------- |
| App.tsx      | 状態管理・ロジック管理    |
| Login.tsx    | ログイン画面         |
| TodoForm.tsx | Todo入力フォーム     |
| TodoList.tsx | Todo一覧表示       |
| TodoItem.tsx | Todo1件表示       |
| Todo.ts      | Todo型定義        |

---

## クラス図（TypeScript設計）

```txt
┌─────────────────────┐
│       Todo          │
├─────────────────────┤
│ id: number          │
│ title: string       │
│ completed: boolean  │
└─────────────────────┘
```

---

## コンポーネント構成図（React設計）

```txt
App.tsx
│
├── Login.tsx
│
├── TodoForm.tsx
│
├── TodoList.tsx
│       │
│       └── TodoItem.tsx
│
└── Todo.ts
```

---

## Main Features

### ✅ Todo追加

入力欄に文字を入力し、追加ボタンまたはEnterキーでTodoを追加できます。

### ✅ Todo完了切り替え

完了ボタンを押すことで状態を切り替えできます。

### ✅ Todo削除

不要なTodoを削除できます。

### ✅ LocalStorage保存

ブラウザを更新してもTodoデータが保持されます。

### ✅ ログイン状態保持

ログイン状態をlocalStorageへ保存し、ページ更新後もログイン状態を維持します。

### ✅ 完了済みTodoの自動ソート

完了したTodoを一覧の下へ自動で移動します。

---

## Processing Flow

```txt
ユーザー入力
      ↓
Todo追加
      ↓
State更新
      ↓
localStorage保存
      ↓
再レンダリング
      ↓
画面更新
```

---

## Key Points

* React Hooks（useState / useEffect）を活用した状態管理
* コンポーネント分割による保守性向上
* TypeScriptによる型安全な実装
* localStorageによるデータ永続化
* ログイン状態保持機能の実装
* 完了済みTodoの自動ソート機能

---

## What I Learned

このアプリ制作を通じて以下を学習しました。

* Reactの基本設計
* React Hooks（useState / useEffect）
* Propsによるデータ受け渡し
* コンポーネント設計
* TypeScriptの型定義
* localStorage
* イベント処理
* 配列操作（map / filter / sort）

---

## Future Improvements

* Todo編集機能
* Todo検索機能
* ダークモード
* Firebase Authentication
* Firebase Firestore連携
* ユーザーごとのTodo管理

---

## Setup

```bash
npm install
npm run dev
```

---

## Screenshot

```txt
ここにアプリのスクリーンショットを掲載予定
```

