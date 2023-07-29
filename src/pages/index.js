import FeaturedCategories from "@/components/UI/FeaturedCategories";
import PCComponents from "@/components/UI/PCcomponents";

const HomePage = ({ allCategories }) => {
  console.log('allCategories',allCategories)
  return (
    <div>
      <PCComponents/>
      <FeaturedCategories allCategories={allCategories}/>
    </div>
  );
};

export default HomePage;

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/category");
  const data = await res.json();

  return {
    props: {
      allCategories: data,
    },
    revalidate: 30,
  };
};
