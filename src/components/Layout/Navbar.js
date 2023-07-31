import styles from "@/styles/Home.module.css";
import { ProfileOutlined } from "@ant-design/icons";
import { Button, Layout, Menu } from "antd";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
const { Header, Content, Footer } = Layout;

const Navbar = () => {
  const { data: session } = useSession();

  const categories = [
    { name: "CPU / Processor", url: "/categories/1" },
    { name: "Motherboard", url: "/categories/2" },
    { name: "RAM", url: "/categories/3" },
    { name: "Power Supply Unit", url: "/categories/4" },
    { name: "Storage Device", url: "/categories/5" },
    { name: "Monitor", url: "/categories/6" },
    { name: "Others", url: "/categories/7" },
  ];

  return (
    <Header
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div className="brand-logo">
        <h1>
          <Link
            href="/"
            style={{
              color: "white",
              padding: "10px 0px",
              borderRadius: "3px",
              fontWeight: "600",
              fontSize: "20px",
            }}
          >
            Build Dream PC
          </Link>
        </h1>
      </div>
      <div style={{ display: "flex", alignItems: "right" }}>
        <Menu theme="dark" mode="horizontal" className={styles.menu_items}>
          <Menu.SubMenu
            key="sub1"
            title="Categories"
            icon={<ProfileOutlined />}
          >
            {categories.map((category) => (
              <Menu.Item key={category.url}>
                <Link href={`/${category.url}`}>{category.name}</Link>
              </Menu.Item>
            ))}
          </Menu.SubMenu>

          {session?.user ? (
            <>
              <items onClick={() => signOut()} className="btn btn-info">
                Logout
              </items>
            </>
          ) : (
            <Link
              style={{ textDecoration: "none", color: "white" }}
              href="/login"
            >
              <items className="btn btn-accent">Login</items>
            </Link>
          )}
        </Menu>

        <div className={styles.menu_items}>
          <Link href="/pc-builder">
            <Button type="primary" className={styles.gradientStyle}>
              PC Builder
            </Button>
          </Link>
        </div>
      </div>
    </Header>
  );
};

export default Navbar;
