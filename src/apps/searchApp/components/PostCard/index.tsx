import styles from "../SearchApp/index.module.scss";

type PostCardProps = {
  number: number;
  name: string;
  dateTime: string;
  id: string;
  content: string;
};

export const PostCard = ({
  number,
  name,
  dateTime,
  id,
  content,
}: PostCardProps) => {
  return (
    <div className={styles.postCard}>
      <div className={styles.postHeader}>
        <span className={styles.postNumber}>{number}</span>
        <span className={styles.postName}>{name}</span>
        <span className={styles.postDate}> {dateTime}</span>
        <span className={styles.postId}>ID:{id}</span>
      </div>
      <div className={styles.content}>{content}</div>
    </div>
  );
};
