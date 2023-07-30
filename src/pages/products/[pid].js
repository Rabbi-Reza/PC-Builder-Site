const ProductDetails = ({ singleProduct }) => {
  return <div>ProductDetails</div>;
};

export default ProductDetails;

export const getStaticPaths = async () => {
  const res = await fetch("https://pc-builder-site.vercel.app/api/product");
  const categories = await res.json();
  const paths = categories.data.map((post) => ({
    params: { pid: post._id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;

  const res = await fetch(`https://pc-builder-site.vercel.app/api/products/${params.pid}`);
  const data = await res.json();

  return {
    props: {
      singleProduct: data,
    },
  };
};
