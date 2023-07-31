import styles from "@/styles/ProductDetailPage.module.css";
import { Card, Col, Divider, Image, Rate, Row, Tag, Typography } from "antd";
const { Title, Paragraph } = Typography;

const ProductDetails = ({ singleProduct }) => {
  console.log("singleProduct", singleProduct?.data[0]);
  return (
    <div
      className={styles.product_details_container}
      style={{
        justifyContent: "space-between",
      }}
    >
      <Card>
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12} lg={12}>
            <Image
              src={singleProduct?.data[0].image}
              alt={singleProduct?.data[0].productName}
              className={styles.product_image}
            />
          </Col>
          <Col xs={24} md={12} lg={12} className={styles.product_info}>
            <Title level={2}>{singleProduct?.data[0].name}</Title>
            <Paragraph>Category: {singleProduct?.data[0].category}</Paragraph>
            <Paragraph>
              Status:{" "}
              <Tag
                color={
                  singleProduct?.data[0].status === "In Stock" ? "green" : "red"
                }
              >
                {singleProduct?.data[0].status}
              </Tag>
            </Paragraph>
            <Paragraph>Price: ${singleProduct?.data[0].price}</Paragraph>
            <Title level={4}>Description</Title>
            <Paragraph>{singleProduct?.data[0].description}</Paragraph>
            <Title level={4}>Key Features</Title>
            <Paragraph>{singleProduct?.data[0].features}</Paragraph>
          </Col>
        </Row>
      </Card>
      <Divider />
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12}>
          <Title level={4}>Average Rating</Title>
          <Rate
            disabled
            allowHalf
            value={singleProduct?.data[0].averageRating}
          />
        </Col>
        <Col xs={24} sm={12}>
          <Title level={4}>Individual Rating</Title>
          <Rate
            disabled
            allowHalf
            value={singleProduct?.data[0].individualRating}
          />
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={24}>
          <Title level={4}>Reviews</Title>
          {singleProduct?.data[0].reviews.map((review, index) => (
            <div key={index} className={styles.review_item}>
              <Paragraph>{review}</Paragraph>
            </div>
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetails;

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.URL}/product`);
  const categories = await res.json();
  const paths = categories.data.map((post) => ({
    params: { pid: post._id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  // if(typeof window === "undefined") {
  //   return {
  //     props: {
  //       singleProduct: []
  //     }
  //   }
  // }
  const { params } = context;

  const res = await fetch(`${process.env.URL}/products/${params.pid}`);
  const data = await res.json();

  return {
    props: {
      singleProduct: data,
    },
  };
};
