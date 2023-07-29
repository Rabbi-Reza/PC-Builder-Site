import styles from "@/styles/FeaturedCategories.module.css";
import Link from "next/link";

const FeaturedCategories = ({ allCategories }) => {
  return (
    <div>
      <h1>Featured Categories</h1>
      <div className={styles.display_container}>
        {allCategories?.data?.map((dt, i) => (
          <>
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">{dt?.title}</h2>
                <div className="card-actions justify-end">
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    href={`/categories/${dt?.link}`}
                  >
                    <button className="btn btn-primary">Visit Products</button>
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

export default FeaturedCategories;
