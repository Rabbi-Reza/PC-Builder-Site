/* eslint-disable @next/next/no-img-element */
import FeaturedProductCard from "@/components/UI/FeaturedProductCard";
import styles from "@/styles/CategoryPage.module.css";
import { Col, Row } from "antd";

const CategoryPage = ({ catProd }) => {
  return (
    <div>
      <div className="products-container">
        <Row gutter={[16, 16]}>
          {catProd?.data?.map((product) => (
            <Col key={product._id} xs={24} sm={12} md={8} lg={6} xl={6}>
              <FeaturedProductCard product={product} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default CategoryPage;

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.URL}/category`);
  const categories = await res.json();
  const paths = categories.data.map((post) => ({
    params: { cid: post.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;

  const res = await fetch(`${process.env.URL}/categories/${params.cid}`);
  const data = await res.json();

  return {
    props: {
      catProd: data,
    },
  };
};
