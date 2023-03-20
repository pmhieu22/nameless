import styles from "./index.module.css";

const DivideImage = ({ sourceImg }) => {
  return (
    <div className={styles["divide-image__wrapper"]}>
      <img src={sourceImg} alt="" />
    </div>
  );
};

export default DivideImage;
