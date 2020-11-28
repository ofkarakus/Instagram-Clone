import React from "react";
import { useFormik } from "formik";
import { Password, Email, Username, ContainedButton } from "../";

export const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Username
        type="username"
        name="username"
        onChange={(value) => formik.handleChange(value)}
        value={formik.values.username}
      />
      <Email
        type="email"
        name="email"
        onChange={(value) => formik.handleChange(value)}
        value={formik.values.email}
      />
      <Password onChange={formik.handleChange} value={formik.values.password} />
      <ContainedButton backgroundColor='rgb(178,223,252)' type="submit" text='Sign Up'/>
    </form>
  );
};
