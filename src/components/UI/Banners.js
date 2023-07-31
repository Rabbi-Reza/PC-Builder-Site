import Banner1 from "@/assets/banners/ban_2.webp";
import Banner2 from "@/assets/banners/ban_1.webp";
import { Carousel, Col, Row } from "antd";
import Image from "next/image";

const contentStyle = {
  height: "425px",
  color: "#000",
};

const Banner = () => (
  <Carousel effect="fade" autoplay style={{ margin: "20px 0px" }}>
    {/* slider-1 */}
    <div>
      <Row>
        <Col
          lg={{
            span: 24,
          }}
          style={contentStyle}
        >
          <Image src={Banner1} fill alt="banner_1" />
        </Col>
      </Row>
    </div>
    {/* slider-2 */}
    <div>
      <Row>
        <Col
          lg={{
            span: 24,
          }}
          style={contentStyle}
        >
          <Image
            src={Banner2}
            fill
            alt="banner_2"
            style={{ grayScale: "-1" }}
          />
        </Col>
      </Row>
    </div>
  </Carousel>
);
export default Banner;
