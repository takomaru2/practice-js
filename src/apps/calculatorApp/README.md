# calculator-app

## 必要そうなもの
-  入力欄コンポーネント 
-  ラベルコンポーネント
-  ボタンコンポーネント
- onClick x2
-  onClickに渡す関数２個
    - const calc
    - const reset
-  state　結果の表示　number | undefined
-  state エラー表示　エラーがどの表示が出るか？
-  state 入力欄1 number
-  state 入力欄2 number
-  state ユーザーが選択した演算子　string
- 演算子にどのようなものがあるか定数に切り出しそう将来的に


## 実装手順

 - 静的実装

 - stateを決める**
    - 数値1 / 数値2 / 演算子 / 結果 / エラー


 - input・selectをstateに紐づける**
   - `value` と `onChange` を設定
   - 入力＝stateになる状態を作る


  - **計算ロジックを書く**
    - stateを使って + - × ÷ を関数で実装
    - まだUIとは繋げない


  - **ボタンでつなぐ**
    - 計算ボタン → 計算関数を `onClick`
    - リセットボタンは別関数


 - **リセット処理**
   - 全stateを初期値に戻す


 - **エラー対応（最後）**
   - 未入力・0割りなどを判定
   - エラー用stateにメッセージを入れて表示