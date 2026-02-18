import styles from "./index.module.scss";
import { useState } from "react";

const posts = [
  {
    number: 132,
    name: "本当にあった怖い名無し",
    dateTime: "2009/12/03(木)03:48:38",
    id: "i8XtSQs10",
    content:
      "初カキコ…ども…\n" +
      "俺みたいな中3でグロ見てる腐れ野郎、他に、いますかっていねーか、はは\n" +
      "\n" +
      "今日のクラスの会話\n" +
      "あの流行りの曲かっこいい とか あの服ほしい とか\n" +
      "ま、それが普通ですわな\n" +
      "\n" +
      "かたや俺は電子の砂漠で死体を見て、呟くんすわ\n" +
      "it'a true wolrd．狂ってる？それ、誉め言葉ね。\n" +
      "\n" +
      "好きな音楽 eminem\n" +
      "尊敬する人間 アドルフ・ヒトラー（虐殺行為はNO）\n" +
      "\n" +
      "なんつってる間に4時っすよ(笑) あ～あ、義務教育の辛いとこね、これ",
  },
  {
    number: 573,
    name: "以下、名無しにかわりましてVIPがお送りします",
    dateTime: "2012/06/18(月) 23:47:12",
    id: "MNO4567890",
    content:
      "夜の11時くらいですかね、突然堀江さんから「ひろゆきお前暇か?」って電話がかかってきたんですよね。\n" +
      "「いや寝る所だったんですけど」って答えたら「今可愛い子とホテルに行く所なんだけどお前も来てくれ」って言うんですよ。\n" +
      "それで、ちょっと期待しながらホテル行ってみたら、結構可愛い子で僕もちょっとやる気になっちゃったんですよね。\n" +
      "でもシャワー浴びて準備してベッドに行ってみたらなんとその子チンコ付いてたんですよ！（笑)\n" +
      "「堀江さん、この子男じゃないですか！」\n" +
      "って文句言ったら\n" +
      "「可愛ければいいじゃねぇか！」\n" +
      "って怒るんですよ。\n" +
      "でもまあ堀江さんの言うことも一理あるなって。ニューハーフのお尻に入れるのもまた経験だなと思ってたら、堀江さんが\n" +
      "「なあ ひろゆき、俺に入れて貰うことできるか」って言うんですよ！\n" +
      "できる訳ないじゃないですか！\n" +
      "「前と後ろ両方から責めて欲しい。前を触るのは流石にお前でも嫌がると思った」って。\n" +
      "なんなんだよその心遣い。（笑）\n" +
      "普通は中年のおっさんのチンコ触りたくないしお尻にも入れたくないですよ。\n" +
      "結局僕はニューハーフの子にフェラチオだけしてもらって帰ってきました。\n" +
      "もう二度と行きません。（笑）",
  },
  {
    number: 251,
    name: "以下、名無しにかわりましてVIPがお送りします",
    dateTime: "2005/09/22(木) 14:28:55",
    id: "PQR7890123",
    content:
      "全盛期のイチロー伝説\n" +
      "\n" +
      "●３打数５安打は当たり前、３打数８安打も\n" +
      "●初回先頭打者満塁ホームランを頻発\n" +
      "●イチローにとってのホームランは内野安打の打ちそこない\n" +
      "●初回先頭打者サイクルヒットも日常茶飯事\n" +
      "●９回裏１００点差、チームメイト全員負傷の状況から１人で逆転\n" +
      "●１回のスイングでバットが３本に見える\n" +
      "●バントでホームラン\n" +
      "●打席に立つだけで相手投手が泣いて謝った、心臓発作を起こす投手も\n" +
      "●ホームランでも納得いかなければサードベース踏まないで帰ってきた\n" +
      "●あまりに打ちすぎるから牽制球でもストライク扱い\n" +
      "●その牽制球もヒット\n" +
      "●ピッチャーを一睨みしただけでボールが二遊間に飛んでいく\n" +
      "●試合の無い移動日でも２安打\n" +
      "●シーズン２００本安打記念花束もバスの中で受け取った\n" +
      "●バット使わずに手で打ってたことも\n" +
      "●自分のホームランボールを自分でキャッチしてレーザービームで投げ返す\n" +
      "●内野ランニングホームランなんてザラ、２周することも\n" +
      "●一塁でアウトになってからベンチに帰るほうが速かった\n" +
      "●ウェイティングサークルからヒット\n" +
      "●打球をキャッチしようとしたピッチャーと、それを受け止めようとしたセカンド、ショート、センターの選手ともどもスタンドインさせた\n" +
      "●観客の韓国人のヤジに流暢な韓国語で反論しながら背面キャッチ\n" +
      "●グッとガッツポーズしただけで５点くらい入った\n" +
      "●スイングでハリケーンが起きたことは有名\n" +
      "●ライトの深い位置から三塁線のスクイズも処理\n" +
      "●ボウリングの球を楽々ホームラン\n" +
      "●あまりに打つので最初から一塁に立っていた時期も\n" +
      "●イチローが打ったホームランを観客席の子供が捕ったらすでにボールにサインがしてあった\n" +
      "●一塁でアウトを取られたように見えたが、実は残像で本体はすでにホームインしていたことも\n" +
      "●ピッチャーの投球と同時に走り出し、１５０ｋｍ／ｈのボールを追い抜きホームスチール成功\n" +
      "●２００６年アメリカ１０大事件　第１位「イチローの三振」\n" +
      "●チョコバットで８０連続ヒットを出したこともある\n" +
      "●一塁からホームスチールできるのはイチローくらい\n" +
      "●イチローに盗塁されたことにまだ気づいていないピッチャーも多い\n" +
      "●イチローは落ちてきたりんごをバットで打って万有引力発見したのは有名\n" +
      "●名打者はボールが止まって見えるというがイチローはむしろボールの分子運動すら見えた\n" +
      "●ハンデとして目を瞑って打席に入るルールも導入されたが全然ハンデにならなかった\n" +
      "●自分の打球に飛び乗ってスタンドまで行くというファンサービス",
  },
];

[1].filter((a) => a);

export const SearchApp = () => {
  // まずはstateが必要。inputのplaceholderに文字が入力されているかのstate
  const [keyword, setKeyword] = useState("");

  const filteredPosts = posts.filter((post) => {
    return post.name.includes(keyword) || post.content.includes(keyword);
  });

  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>2chコピペ検索</h1>
      <div className={styles.searchBox}>
        <input
          className={styles.searchInput}
          placeholder={"名前または本文で検索..."}
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
        ></input>
      </div>
      {/*数字の部分を可変にしたい下のisMatchedみたいなのを作り、そのlengthを表示すれば良い*/}
      {/*入力されていたら出る inputにkeywordあれば*/}

      {keyword.length >= 1 && (
        <div className={styles.resultInfo}>
          {filteredPosts.length}件の書き込みが見つかりました
        </div>
      )}

      <div className={styles.reviewList}>
        {filteredPosts.length === 0 && (
          <div className={styles.noResults}>
            該当する書き込みが見つかりませんでした
          </div>
        )}

        {posts.map((obj) => {
          const isMatched =
            obj.name.includes(keyword) || obj.content.includes(keyword);
          if (isMatched) {
            return (
              <div className={styles.postCard}>
                <div className={styles.postHeader}>
                  <span className={styles.postNumber}>{obj.number}</span>
                  <span className={styles.postName}>{obj.name}</span>
                  <span className={styles.postDate}> {obj.dateTime}</span>
                  <span className={styles.postId}>ID:{obj.id}</span>
                </div>
                <div className={styles.content}>{obj.content}</div>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};
