import { MouseEventHandler, useState } from "react";

export const TodoApp = () => {
  const [inputtingTaskName, setInputtingTaskName] = useState(""); // 新しいタスクの入力値
  const [taskNames, setTaskNames] = useState<string[]>([]); // 保存しているタスク一覧
  const [editingText, setEditingText] = useState(""); // 編集中inputの一時的な値
  const [editingItem, setEditingItem] = useState<string | null>(null); // 編集中のタスクを特定するための値。文字列だと一意ではないのでidが欲しい

  type TaskProps = {
    taskName: string;
    onEdit: () => void;
    onDelete: () => void;
  };

  const Task = ({ taskName, onEdit, onDelete }: TaskProps) => {
    return (
      <div style={{ display: "flex", gap: "10px" }}>
        <div>{taskName}</div>

        <button style={{ border: "2px lightblue solid" }} onClick={onEdit}>
          編集
        </button>

        <button style={{ border: "2px red solid" }} onClick={onDelete}>
          削除
        </button>
      </div>
    );
  };

  type EditProps = {
    editingText: string;
    onSave: MouseEventHandler<HTMLButtonElement> | undefined;
    onCancel: MouseEventHandler<HTMLButtonElement> | undefined;
  };

  const EditTask = ({ editingText, onSave, onCancel }: EditProps) => {
    return (
      <div style={{ display: "flex", gap: "10px" }}>
        <input
          style={{ border: "2px black solid" }}
          value={editingText}
          onChange={(event) => setEditingText(event.target.value)}
        />

        <button style={{ border: "2px lightgreen solid" }} onClick={onSave}>
          保存
        </button>

        <button style={{ border: "2px lightgray solid" }} onClick={onCancel}>
          キャンセル
        </button>
      </div>
    );
  };

  const handleCancel = () => {
    setEditingItem(null);
  };

  const handleSave = () => {
    const updated = taskNames.map((task) =>
      task === editingItem ? editingText : task,
    );
    setTaskNames(updated);
    setEditingItem(null);
  };

  const handleDelete = (taskName: string) => {
    const result = taskNames.filter((task) => {
      return task !== taskName;
    });
    setTaskNames(result);
  };

  const handleEdit = (taskName: string) => {
    setEditingItem(taskName);
    setEditingText(taskName);
  };

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
            return (
              <EditTask
                editingText={editingText}
                onCancel={handleCancel}
                onSave={handleSave}
              />
            );
          }

          return (
            <Task
              taskName={taskName}
              onDelete={() => handleDelete(taskName)}
              onEdit={() => handleEdit(taskName)}
            />
          );
        })}
    </div>
  );
};
