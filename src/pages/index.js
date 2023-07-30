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
  const res = await fetch("https://pc-builder-site.vercel.app/api/category");
  const data = await res.json();

  const productData = await fetch("https://pc-builder-site.vercel.app/api/product");
  const products = await productData.json();

  return {
    props: {
      allCategories: data,
      allProducts: products,
    },
    revalidate: 30,
  };
};
