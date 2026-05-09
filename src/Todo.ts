/**
 * Todoデータの型
 * Todoアプリで扱うタスクの構造を定義する
 */

export type Todo = {
    id: number
    title: string
      /** 完了しているかどうか */
    completed: boolean
}
