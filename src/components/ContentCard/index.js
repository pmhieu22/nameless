import styles from "./index.module.css";

const ContentCard = ({ title, content }) => {
  return (
    <div className={styles["content-card__wrapper"]}>
      <div className={styles["content-card__title"]}>༺ {title} ༺</div>
      <span className={styles["content-card__text"]}>{content}</span>
    </div>
  );
};

export default ContentCard;
