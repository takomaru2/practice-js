import { Dispatch, MouseEventHandler, SetStateAction, useState } from "react";

type Task = {
  id: number;
  name: string;
};

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
  setEditingText: Dispatch<SetStateAction<string>>;
};

const EditTask = ({
  editingText,
  onSave,
  onCancel,
  setEditingText,
}: EditProps) => {
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

// taskNamesが['a','b','c']となっていったのが
// [{id:1,name:あああ},{id:2,name:いいい}]となりましたとさ

export const TodoApp = () => {
  const [inputtingTaskName, setInputtingTaskName] = useState(""); // 新しいタスクの入力値

  const [taskNames, setTaskNames] = useState<Task[]>([]); // 保存しているタスク一覧
  console.log("debug", taskNames);
  // todo: 複数を扱えるデータ型に変更する
  const [editingText, setEditingText] = useState(""); // 編集中inputの一時的な値

  // まずeditingTaskIdのデータ型がnumber | nullだから、一つのタスクしか制御できない。
  // タスク全体のように配列とか、複数のデータを扱えるデータ型のstateに変えるべきeditingTaskIds: number[]
  // 編集中のタスクを特定するための値。
  const [editingTaskIds, setEditingTaskIds] = useState<number[]>([]);
  // console.log(editingTaskIds);

  const handleCancel = () => {
    // setEditingTaskId(null);
    //todo: 動的にせなあかん
    setEditingTaskIds([]);
  };

  const handleSave = () => {
    // 空白とか消すよ
    if (editingText.trim() === "") return;

    // taskは{id:1,name:'hoge'}みたいなobj

    // const updated = taskNames.map((task) =>
    //   // taskが{ id: 1, name: "あああ" }がこれだと展開すると { id: 1, name: "あああ" }
    //   // もしこのタスクのidが編集中のタスクのidと同じなら、このタスクの内容を全部コピーして
    //   // nameの部分だけ編集中のテキストに置き換えた新しいオブジェクトを作る。そうでなければ元のタスクをそのまま使う。
    //   task.id === editingTaskId ? { ...task, name: editingText } : task,
    // );
    //
    // const updated2 = taskNames.map((task) => {
    //   if (task.id === editingTaskId) {
    //     return { ...task, name: editingText };
    //   }
    // });

    // 1, [1,3] -> true
    // 2, [1,3] -> false
    // 3, [1,3] -> true
    // 前回の実装で起きた、複数回編集できないバグを修正
    const updated = taskNames.map((task) => {
      if (editingTaskIds.includes(task.id)) {
        return { ...task, name: editingText };
      } else {
        return task;
      }
    });

    setTaskNames(updated);
    // setEditingTaskId(null);
    setEditingTaskIds([]);
  };

  const handleDelete = (id: number) => {
    const result = taskNames.filter((task) => {
      // task.idが削除対象のidと違う場合だけ残sう（true なら残る、false なら削除される）
      return task.id !== id;
    });
    setTaskNames(result);
  };

  const handleEdit = (id: number, name: string) => {
    // setEditingTaskId(id);
    setEditingTaskIds((prev) => {
      // 新しい[]を作ってそこにpush
      const newIds = [];
      for (let i = 0; i < prev.length; i++) {
        newIds.push(prev[i]);
      }
      newIds.push(id);
      return newIds;
    });
    setEditingText(name);
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
            // todo: 日報に書こう
            setTaskNames([
              ...taskNames,
              // ランダムなid準備するのに使ってみた
              { id: Date.now(), name: inputtingTaskName },
            ]);
          }
        }}
      >
        追加
      </button>

      {taskNames.length === 0 && <div>タスクがありません</div>}

      {/*  todo:多分いらん*/}
      {taskNames.length > 0 &&
        taskNames.map((task) => {
          return (
            <div key={task.id}>
              {editingTaskIds.includes(task.id) ? (
                <EditTask
                  editingText={editingText}
                  setEditingText={setEditingText}
                  onCancel={handleCancel}
                  onSave={handleSave}
                />
              ) : (
                <Task
                  taskName={task.name}
                  onDelete={() => handleDelete(task.id)}
                  // handleEditはidでどれを編集UIにするか、nameで編集UIに元の文字列を表示するのに必要だから引数は２つとも必要なのだ
                  onEdit={() => handleEdit(task.id, task.name)}
                />
              )}
            </div>
          );

          // 配列にそのidが含まれていたら
          //２回目そうていしている結果を返してない
          //editingTaskIdsこっちあってた

          // console.log("[debug] editingTaskIds: ", editingTaskIds);
          // console.log("[debug] task.id: ", task.id);
          // console.log(
          //   "[debug] editingTaskIds.includes(task.id):",
          //   editingTaskIds.includes(task.id),
          // );
          // if (editingTaskIds.includes(task.id)) {
          //   // console.log("debug");
          //   return (
          //     <EditTask
          //       key={task.id}
          //       editingText={editingText}
          //       setEditingText={setEditingText}
          //       onCancel={handleCancel}
          //       onSave={handleSave}
          //     />
          //   );
          // }
          //
          // return (
          //   <Task
          //     key={task.id}
          //     taskName={task.name}
          //     onDelete={() => handleDelete(task.id)}
          //     // handleEditはidでどれを編集UIにするか、nameで編集UIに元の文字列を表示するのに必要だから引数は２つとも必要なのだ
          //     onEdit={() => handleEdit(task.id, task.name)}
          //   />
          // );
        })}
    </div>
  );
};
