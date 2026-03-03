import { useState } from "react";

export const TodoApp = () => {
  const [inputtingTaskName, setInputtingTaskName] = useState(""); // 新しいタスクの入力値
  const [taskNames, setTaskNames] = useState<string[]>([]); // 保存しているタスク一覧
  const [editingText, setEditingText] = useState(""); // 編集中のタスクのテキスト
  const [editingItem, setEditingItem] = useState<string | null>(null); // 編集中のタスクを特定するための値

  return (
    <div style={{ padding: "10px" }}>
      <input
        style={{ backgroundColor: "lightgray", marginRight: "10px" }}
        value={inputtingTaskName}
        onChange={(event) => {
          setInputtingTaskName(event.target.value);
        }}
      />
      <button
        style={{ border: "2px lightgreen solid" }}
        onClick={() => {
          if (inputtingTaskName !== "") {
            setInputtingTaskName("");
            taskNames.push(inputtingTaskName);
            setTaskNames(taskNames);
          }
        }}
      >
        追加
      </button>

      {taskNames.length === 0 && <div>タスクがありません</div>}

      {taskNames.length > 0 &&
        taskNames.map((taskName) => {
          if (editingItem === taskName) {
            // 編集UI
            return (
              <div style={{ display: "flex", gap: "10px" }}>
                <input
                  style={{ border: "2px black solid" }}
                  value={editingText}
                  onChange={(event) => setEditingText(event.target.value)}
                />

                <button
                  style={{ border: "2px lightgreen solid" }}
                  onClick={() => {
                    const updated = taskNames.map((task) =>
                      task === editingItem ? editingText : task,
                    );
                    setTaskNames(updated);
                    setEditingItem(null);
                  }}
                >
                  保存
                </button>

                <button
                  style={{ border: "2px lightgray solid" }}
                  onClick={() => setEditingItem(null)}
                >
                  キャンセル
                </button>
              </div>
            );
          }

          // 通常UI
          return (
            <div style={{ display: "flex", gap: "10px" }}>
              <div>{taskName}</div>

              <button
                style={{ border: "2px lightblue solid" }}
                onClick={() => {
                  setEditingItem(taskName);
                  setEditingText(taskName);
                }}
              >
                編集
              </button>

              <button
                style={{ border: "2px red solid" }}
                onClick={() => {
                  const result = taskNames.filter((task) => {
                    return task !== taskName;
                  });
                  setTaskNames(result);
                }}
              >
                削除
              </button>
            </div>
          );
        })}
    </div>
  );
};
