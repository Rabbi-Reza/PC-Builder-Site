/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "@/styles/CategoryPage.module.css";

const CategoryPage = ({ catProd }) => {

  return (
    <div>
      {" "}
      <div className={styles.display_container}>
        {catProd?.data?.map((dt, i) => (
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
                <div className="card-actions justify-start">
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    href={`/products/${dt?._id}`}
                  >
                    <button className="btn btn-primary">View Detail</button>
                  </Link>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/category");
  const categories = await res.json();
  const paths = categories.data.map((post) => ({
    params: { cid: post.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;

  const res = await fetch(`http://localhost:3000/api/categories/${params.cid}`);
  const data = await res.json();

  return {
    props: {
      catProd: data,
    },
  };
};
