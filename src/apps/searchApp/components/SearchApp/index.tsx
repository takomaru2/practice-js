import styles from "./index.module.scss";

export const SearchApp = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>2chコピペ検索</h1>

      <div className={styles.searchBox}>
        <input
          className={styles.searchInput}
          placeholder={"名前または本文で検索..."}
        ></input>
      </div>

      <div className={styles.reviewList}>
        <div className={styles.reviewCard}>
          <div className={styles.postHeader}>
            132 本当にあった怖い名無し 2009/12/03(木) 03:48:38 ID:i8XtSQs10
          </div>
          <div className={styles.content}>
            初カキコ…ども…
            <br />
            俺みたいな中3でグロ見てる腐れ野郎、他に、いますかっていねーか、はは
            <br />
            今日のクラスの会話
            <br />
            あの流行りの曲かっこいい とか あの服ほしい とか
            <br />
            ま、それが普通ですわな
            <br />
            かたや俺は電子の砂漠で死体を見て、呟くんすわ
            <br />
            it'a true wolrd．狂ってる？それ、誉め言葉ね。
            <br />
            好きな音楽 eminem
            <br />
            尊敬する人間 アドルフ・ヒトラー（虐殺行為はNO）
            <br />
            なんつってる間に4時っすよ(笑) あ～あ、義務教育の辛いとこね、これ
          </div>
        </div>
      </div>
    </div>
  );
};
