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
  const res = await fetch("http://localhost:3000/api/category");
  const data = await res.json();

  const productData = await fetch("http://localhost:3000/api/product");
  const products = await productData.json();

  return {
    props: {
      allCategories: data,
      allProducts: products,
    },
    revalidate: 30,
  };
};
