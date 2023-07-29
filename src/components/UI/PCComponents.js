/* eslint-disable @next/next/no-img-element */
import styles from "@/styles/PCComponents.module.css";
import Link from "next/link";

const PCComponents = ({ allProducts }) => {
  return (
    <div>
      <h1>Featured PC Components</h1>
      <div className={styles.display_container}>
        {allProducts?.data?.map((dt, i) => (
          <>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src={dt?.image}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {dt?.name}
                </h2>
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

export default PCComponents;
