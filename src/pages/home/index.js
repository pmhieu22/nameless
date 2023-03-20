import { Carousel, Col, Image, Row } from "antd";
import { LeftOutlined } from "@ant-design/icons";

import image2 from "../../assets/images/e974efe28a14574a0e05.jpg";
import image3 from "../../assets/images/332686166_1187151358602856_7852727054458098378_n.jpg";
import imageLiquor1 from "../../assets/images/08b2202e0adad7848ecb.jpg";
import divideImg1 from "../../assets/images/f01012907666ab38f277.jpg";

import styles from "./index.module.css";
import { Zoom, Fade } from "react-reveal";
import ContentCard from "../../components/ContentCard";
import DivideImage from "../../components/DivideImage";

const Home = () => {
  return (
    <div className={styles["client-container"]}>
      <div className={styles["image-slider"]}>
        <Carousel
          className={styles["image-slider__carousel"]}
          // autoplay
          arrows={true}
          focusOnSelect={true}
          swipeToSlide={true}
        >
          {/* <div className={styles["image-slider__item"]}>
            <img src={image1} alt="" />
          </div> */}
          <div className={styles["image-slider__item"]}>
            <img src={image2} alt="" className={styles["img"]} />
          </div>
          <div className={styles["image-slider__item"]}>
            <img src={image3} alt="" className={styles["img"]} />
          </div>
        </Carousel>
      </div>
      <Row
        justify={"center"}
        style={{
          width: "90%",
          marginTop: "90px",
          marginBottom: "90px",
          padding: "0 25px",
        }}
      >
        <Col xs={24} xl={8} style={{ height: "50%" }}>
          <Fade left>
            <ContentCard
              title="DRINK"
              content="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
            />
          </Fade>
        </Col>
        <Col xs={24} xl={8} style={{ height: "50%" }}>
          <Zoom>
            <img src={imageLiquor1} alt="" className={styles["imageLiquor"]} />
          </Zoom>
        </Col>
        <Col xs={24} xl={8} style={{ height: "50%" }}>
          <Fade right>
            <ContentCard
              title="DRINK"
              content="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
            />
          </Fade>
        </Col>
      </Row>
      <Row >
        <DivideImage sourceImg={divideImg1} />
      </Row>
    </div>
  );
};

export default Home;
