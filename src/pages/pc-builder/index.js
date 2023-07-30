import Link from "next/link";

const PCBuilderHomePage = ({ allCats }) => {
  console.log("allCats", allCats);
  return (
    <div>
      {allCats?.slice(0, 6).map((dt, i) => (
        <>
          <div className="card w-100 bg-base-100 shadow-xl p-10">
            <div className="card-body">
              <h2 className="card-title">Category: {dt?.title}</h2>
              <div className="card-actions justify-end">
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  href={`/pc-builder/${dt?.id}`}
                >
                  <button className="btn btn-primary">Choose/Select</button>
                </Link>
              </div>
            </div>
          </div>
        </>
      ))}
      <div className="card w-100 bg-base-100 shadow-xl p-10">
        <button className="btn btn-accent" disabled={false}>
          Accent
        </button>
      </div>
    </div>
  );
};

export default PCBuilderHomePage;

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/category");
  const data = await res.json();

  return {
    props: {
      allCats: data.data,
    },
  };
};
