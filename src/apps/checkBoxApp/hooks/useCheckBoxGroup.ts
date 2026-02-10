import { useEffect, useRef, useState } from "react";
import { Item } from "../components/CheckBoxApp";

export const useCheckBoxGroup = (ITEMS: Item[]) => {
  const [checkIds, setCheckIds] = useState<number[]>([]);

  const hasChecked = checkIds.length > 0;
  const count = checkIds.length;
  const allChecked = checkIds.length === ITEMS.length;
  const isPartial = hasChecked && !allChecked;

  const toggleCheck = (id: number): void => {
    setCheckIds((prev) => {
      // すでに選択済みなら、そのidを配列から削除（チェックを外す）
      if (prev.includes(id)) {
        return prev.filter((value) => value !== id);
      }
      //　まだ選択されていなければ、そのidを配列に追加（チェックを入れる）
      return [...prev, id];
    });
  };

  //ここにallItemsIdsみたいなの作ってmap格納
  const allItemsIds = ITEMS.map((item) => item.id);

  // 三項演算子。returnが処理が複数ないこのパターンは使いやすいわね
  const toggleAll = (): void => {
    setCheckIds(allChecked ? [] : allItemsIds);
  };

  // indeterminate（横棒の中間状態）はpropsでは制御できないため（propsが生えてないから）useRefを使う。
  const allCheckBoxRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    //型ガード！！
    if (allCheckBoxRef.current !== null) {
      allCheckBoxRef.current.indeterminate = isPartial;
    }
  }, [isPartial]);

  return {
    checkIds,
    count,
    hasChecked,
    allChecked,
    toggleCheck,
    toggleAll,
    allCheckBoxRef,
  };
};
