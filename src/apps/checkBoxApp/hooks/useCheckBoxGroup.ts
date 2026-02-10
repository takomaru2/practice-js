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
      // チェック更新後のid配列を入れるための箱
      // todo: let使わない形でかけたら尚良し
      let updated;

      // すでに選択されている id なら配列から削除（チェックを外す）
      if (prev.includes(id)) {
        updated = prev.filter((value) => value !== id);
      } else {
        // 選択されていなければ配列に追加（チェックを入れる）
        updated = [...prev, id];
      }

      // 次のstateとして更新後の配列を返す
      return updated;
    });
  };

  const toggleAll = (): void => {
    if (allChecked) {
      // すでに全選択なら → すべて解除
      setCheckIds([]);
    } else {
      // まだ全選択でなければ → すべて選択
      // todo: mapを定数化してコンポーネント外に出す。
      setCheckIds(ITEMS.map((item) => item.id));
    }
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
