import { addToBuildList } from "@/redux/features/productsBuild/productsBuildSlice";
import styles from "@/styles/PCBuilderAdd.module.css";
import Link from "next/link";
import { useDispatch } from "react-redux";

const SelectProductPage = ({ allProducts }) => {
  const dispatch = useDispatch();

  const handleAddProduct = (product) => {
    dispatch(addToBuildList(product));
  };

  return (
    <div className={styles.display_container}>
      {allProducts?.data?.map((dt, i) => (
        <>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={dt?.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{dt?.name}</h2>
              <p>BDT {dt?.price}</p>
              <div className="badge badge-primary">{dt?.category}</div>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">{dt?.status}</div>
              </div>
              <div className="">
                {dt?.averageRating}
                <input className="mask mask-star-2 bg-green-500" />
              </div>
              <div className="card-actions justify-start">
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  href={`/pc-builder`}
                >
                  <button
                    className="btn btn-primary"
                    onClick={() => handleAddProduct(dt)}
                  >
                    Add To Builder
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default SelectProductPage;

export const getServerSideProps = async (context) => {
  const { params } = context;
  // const res = await fetch("http://localhost:5000/news");
  const res = await fetch(
    `https://pc-builder-site.vercel.app/api/categories/${params.selProd}`
  );
  const data = await res.json();

  return {
    props: {
      allProducts: data,
    },
    // revalidate: 10,
  };
};
