import React from "react";
import { useFormik } from "formik";
import { Password, Email, ContainedButton } from "../";

export const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Email
        type="email"
        name="email"
        onChange={(value) => formik.handleChange(value)}
        value={formik.values.email}
      />
      <Password onChange={formik.handleChange} value={formik.values.password} />
      <ContainedButton type="submit" />
    </form>
  );
};
