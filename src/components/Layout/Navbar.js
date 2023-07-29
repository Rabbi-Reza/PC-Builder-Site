import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <div className="navbar bg-primary text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>All Categories</a>
              <ul className="p-2">
                <li>
                  <Link
                    style={{ textDecoration: "none" }}
                    href="/categories/processor"
                  >
                    <items>CPU / Processor</items>
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ textDecoration: "none" }}
                    href="/categories/motherboard"
                  >
                    <items>Motherboard</items>
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ textDecoration: "none" }}
                    href="/categories/ram"
                  >
                    <items>RAM</items>
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ textDecoration: "none" }}
                    href="/categories/psu"
                  >
                    <items>Power Supply Unit</items>
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ textDecoration: "none" }}
                    href="/categories/storage"
                  >
                    <items>Storage Device</items>
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ textDecoration: "none" }}
                    href="/categories/monitor"
                  >
                    <items>Monitor</items>
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ textDecoration: "none" }}
                    href="/categories/others"
                  >
                    <items>Others</items>
                  </Link>
                </li>
              </ul>
            </li>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              href="/pc-builder"
            >
              {/* <a className="btn btn-info">Login</a> */}
              <items className="btn btn-info">PC Builder</items>
            </Link>
          </ul>
        </div>
        <Link style={{ textDecoration: "none", color: "white" }} href="/">
          <items className="btn btn-ghost normal-case text-xl">
            Build Dream PC
          </items>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li tabIndex={0}>
            <details>
              <summary>All Categories</summary>
              <ul className="p-">
                <li>
                  <Link
                    style={{ textDecoration: "none" }}
                    href="/categories/1"
                  >
                    <items>CPU / Processor</items>
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ textDecoration: "none" }}
                    href="/categories/2"
                  >
                    <items>Motherboard</items>
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ textDecoration: "none" }}
                    href="/categories/3"
                  >
                    <items>RAM</items>
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ textDecoration: "none" }}
                    href="/categories/4"
                  >
                    <items>Power Supply Unit</items>
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ textDecoration: "none" }}
                    href="/categories/5"
                  >
                    <items>Storage Device</items>
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ textDecoration: "none" }}
                    href="/categories/6"
                  >
                    <items>Monitor</items>
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ textDecoration: "none" }}
                    href="/categories/7"
                  >
                    <items>Others</items>
                  </Link>
                </li>
              </ul>
            </details>
          </li>

          <Link
            style={{ textDecoration: "none", color: "white" }}
            href="/pc-builder"
          >
            {/* <a className="btn btn-info">Login</a> */}
            <items className="btn btn-info">PC Builder</items>
          </Link>
        </ul>
      </div>
      <div className="navbar-end">
        {session?.user ? (
          <>
            <p>
              <span
                style={{
                  textDecoration: "none",
                  color: "#FFFFF7",
                }}
              >
                Welcome,
              </span>{" "}
              <span
                style={{
                  textDecoration: "none",
                  color: "#7ac2af",
                  marginRight: "10px",
                  fontWeight: '600'
                }}
              >
                {session?.user?.name}
              </span>{" "}
            </p>{" "}
            <items onClick={() => signOut()} className="btn btn-info">
              Logout
            </items>
          </>
        ) : (
          <Link
            style={{ textDecoration: "none", color: "white" }}
            href="/login"
          >
            {/* <a className="btn btn-info">Login</a> */}
            <items className="btn btn-accent">Login</items>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
