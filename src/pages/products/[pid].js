const ProductDetails = ({ singleProduct }) => {
  console.log("singleProduct", singleProduct?.data[0]);
  return <div>ProductDetails</div>;
};

export default ProductDetails;

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/product");
  const categories = await res.json();
  const paths = categories.data.map((post) => ({
    params: { pid: post._id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;

  console.log("params.catId", params);

  const res = await fetch(`http://localhost:3000/api/products/${params.pid}`);
  const data = await res.json();

  return {
    props: {
      singleProduct: data,
    },
  };
};
