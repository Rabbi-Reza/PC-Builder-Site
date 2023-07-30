import styles from "@/styles/Login.module.css";
import { GithubOutlined, GoogleOutlined } from "@ant-design/icons";
import { signIn } from "next-auth/react";
import Head from "next/head";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    createUserWithEmailAndPassword(data.email, data.password);
  };

  return (
    <div>
      <Head>
        <title>Next Login</title>
      </Head>
      <div className={styles.form}>
        <h3>LOGIN</h3>
        <div className={styles.social_icons}>
          <GoogleOutlined
            onClick={() =>
              signIn("google", {
                callbackUrl: "/",
              })
            }
          />
          <GithubOutlined
            onClick={() =>
              signIn("github", {
                callbackUrl: "/",
              })
            }
          />
        </div>
        {/* <hr /> */}
        {/* <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="">Your Email</label>
          <input {...register("email", { required: true })} type="email" />
          <label>Your Password</label>
          <input
            {...register("password", { required: true })}
            htmlFor=""
            type="password"
          />
          <button type="submit">Login</button>
        </form> */}
      </div>
    </div>
  );
};

export default LoginPage;
