/* eslint-disable @next/next/no-img-element */
import {
  removeAllFromBuildList,
  removeFromBuildList,
} from "@/redux/features/productsBuild/productsBuildSlice";
import { notification, Rate } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PCBuilderHomePage = ({ allCats }) => {
  const {
    productCPU,
    productMotherboard,
    productRAM,
    productPSU,
    productStorage,
    productMonitor,
  } = useSelector((state) => state.productsBuild);

  const dispatch = useDispatch();
  const router = useRouter();

  const handleRemoveProduct = (product) => {
    dispatch(removeFromBuildList(product));
  };

  const handleCompleteBuild = () => {
    dispatch(removeAllFromBuildList());
    openNotification();

    router.push("/");
  };

  const openNotification = () => {
    notification.open({
      message: "Build Completed Successfully",
      onClick: () => {
        console.log("Notification Clicked!");
      },
    });
  };

  return (
    <div>
      {allCats?.slice(0, 6).map((dt, i) => (
        <>
          {console.log(
            "productCPU",
            dt?.id == "1"
              ? productCPU?._id
              : dt?.id == "2"
              ? productMotherboard?._id
              : dt?.id == "3"
              ? productRAM?._id
              : dt?.id == "4"
              ? productPSU?._id
              : dt?.id == "5"
              ? productStorage?._id
              : productMonitor?._id
          )}
          <div className="card w-100 bg-base-100 shadow-xl p-10">
            <div className="card-body">
              <h2 className="card-title">Category: {dt?.title}</h2>
              {(dt?.id == "1"
                ? productCPU?._id
                : dt?.id == "2"
                ? productMotherboard?._id
                : dt?.id == "3"
                ? productRAM?._id
                : dt?.id == "4"
                ? productPSU?._id
                : dt?.id == "5"
                ? productStorage?._id
                : productMonitor?._id) && (
                <div className="card lg:card-side bg-base-100 shadow-xl">
                  <figure>
                    <img
                      src={
                        dt?.id == "1"
                          ? productCPU?.image
                          : dt?.id == "2"
                          ? productMotherboard?.image
                          : dt?.id == "3"
                          ? productRAM?.image
                          : dt?.id == "4"
                          ? productPSU?.image
                          : dt?.id == "5"
                          ? productStorage?.image
                          : productMonitor?.image
                      }
                      alt="Album"
                      style={{ width: "100px" }}
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">
                      {dt?.id == "1"
                        ? productCPU?.name
                        : dt?.id == "2"
                        ? productMotherboard?.name
                        : dt?.id == "3"
                        ? productRAM?.name
                        : dt?.id == "4"
                        ? productPSU?.name
                        : dt?.id == "5"
                        ? productStorage?.name
                        : productMonitor?.name}
                    </h2>
                    <h2>
                      BDT{" "}
                      {dt?.id == "1"
                        ? productCPU?.price
                        : dt?.id == "2"
                        ? productMotherboard?.price
                        : dt?.id == "3"
                        ? productRAM?.price
                        : dt?.id == "4"
                        ? productPSU?.price
                        : dt?.id == "5"
                        ? productStorage?.price
                        : productMonitor?.price}
                    </h2>
                    <p>
                      {dt?.id == "1"
                        ? productCPU?.status
                        : dt?.id == "2"
                        ? productMotherboard?.status
                        : dt?.id == "3"
                        ? productRAM?.status
                        : dt?.id == "4"
                        ? productPSU?.status
                        : dt?.id == "5"
                        ? productStorage?.status
                        : productMonitor?.status}
                    </p>
                    <div>
                      <div className="card-actions justify-start">
                        <div className="btn btn-secondary">
                          {dt?.id == "1"
                            ? productCPU?.category
                            : dt?.id == "2"
                            ? productMotherboard?.category
                            : dt?.id == "3"
                            ? productRAM?.category
                            : dt?.id == "4"
                            ? productPSU?.category
                            : dt?.id == "5"
                            ? productStorage?.category
                            : productMonitor?.category}
                        </div>
                      </div>
                      <div className="card-actions justify-end">
                        <Rate
                          disabled
                          allowHalf
                          value={
                            dt?.id == "1"
                              ? productCPU?.averageRating
                              : dt?.id == "2"
                              ? productMotherboard?.averageRating
                              : dt?.id == "3"
                              ? productRAM?.averageRating
                              : dt?.id == "4"
                              ? productPSU?.averageRating
                              : dt?.id == "5"
                              ? productStorage?.averageRating
                              : productMonitor?.averageRating
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="card-actions justify-end">
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  href={`/pc-builder/${dt?.id}`}
                >
                  <button className="btn btn-primary">Choose/Select</button>
                </Link>
                <button
                  className="btn btn-error"
                  onClick={() => handleRemoveProduct(dt)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </>
      ))}
      <div className="card w-100 bg-base-100 shadow-xl p-10">
        <button
          onClick={() => handleCompleteBuild()}
          className="btn btn-accent"
          disabled={
            productCPU.length === 0 ||
            productMotherboard.length === 0 ||
            productRAM.length === 0 ||
            productPSU.length === 0 ||
            productStorage.length === 0 ||
            productMonitor.length === 0
          }
        >
          Complete Build
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default PCBuilderHomePage;

export const getServerSideProps = async () => {
  // if(typeof window === "undefined") {
  //   return {
  //     props: {
  //       allCats: []
  //     }
  //   }
  // }

  const res = await fetch(`${process.env.URL}/category`);
  const data = await res.json();

  return {
    props: {
      allCats: data.data,
    },
  };
};
