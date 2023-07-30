import FeaturedCategories from "@/components/UI/FeaturedCategories";
import PCComponents from "@/components/UI/PCComponents";

const HomePage = ({ allCategories, allProducts }) => {
  return (
    <div>
      <PCComponents allProducts={allProducts} />
      <FeaturedCategories allCategories={allCategories} />
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

  const res = await fetch(`https://pc-builder-site-backend.vercel.app/category`);
  const data = await res.json();

  const productData = await fetch(`https://pc-builder-site-backend.vercel.app/product`);
  const products = await productData.json();

  return {
    props: {
      allCategories: data,
      allProducts: products,
    },
    revalidate: 30,
  };
};
