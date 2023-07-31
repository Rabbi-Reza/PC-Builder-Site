import FeaturedProductCard from "@/components/UI/FeaturedProductCard";
import { Card, Col, Row } from "antd";
import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";

const HomePage = ({ allCategories, allProducts }) => {
  const DynamicBanner = dynamic(() => import("@/components/UI/Banners"), {
    loading: () => <h1>Loading...</h1>,
    ssr: false,
  });

  return (
    <div>
      <Head>
        <title>PC Builder</title>
        <meta name="description" content="This is made by next-js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DynamicBanner />
      {/* <PCComponents allProducts={allProducts} /> */}
      {/* <FeaturedCategories allCategories={allCategories} /> */}
      <div>
        <h1
          style={{
            textAlign: "center",
            fontSize: "50px",
            margin: "30px 0px",
          }}
        >
          Featured Products
        </h1>
        <Row gutter={[16, 16]}>
          {allProducts?.data
            ?.sort(() => 0.5 - Math.random())
            ?.slice(0, 6)
            .map((product) => (
              <Col key={product._id} xs={24} sm={12} md={8} lg={6} xl={6}>
                <FeaturedProductCard product={product} />
              </Col>
            ))}
        </Row>

        <h1
          style={{
            textAlign: "center",
            fontSize: "50px",
            margin: "30px 0px",
          }}
        >
          Featured Categories
        </h1>
        <Row gutter={[16, 16]}>
          {allCategories?.data?.map((category) => (
            <Col key={category.url} xs={24} sm={12} md={8} lg={8} xl={8}>
              {/* <FeaturedCategoryCard
                categoryName={category.name}
                categoryURL={category.url}
              /> */}
              <Card>
                <Link href={`/categories/${category?.id}`}>
                  {category?.title}
                </Link>
              </Card>
              {/* <>a</> */}
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default HomePage;

export const getStaticProps = async () => {
  // if(typeof window === "undefined") {
  //   return {
  //     props: {
  //       allCategories: [],
  //       allProducts: []
  //     }
  //   }
  // }

  const res = await fetch(
    `https://pc-builder-site-backend.vercel.app/category`
  );
  const data = await res.json();

  const productData = await fetch(
    `https://pc-builder-site-backend.vercel.app/product`
  );
  const products = await productData.json();

  return {
    props: {
      allCategories: data,
      allProducts: products,
    },
    revalidate: 30,
  };
};
