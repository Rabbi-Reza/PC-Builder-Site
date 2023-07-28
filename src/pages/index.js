const HomePage = ({ allCategories }) => {
  console.log('allCategories',allCategories)
  return (
    <div>
      <h1>This is home page</h1>
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
