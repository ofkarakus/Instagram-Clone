import React, { useContext } from "react";
import { useFormik } from "formik";
import { Password, Email, ContainedButton } from "../";
import { Context } from "../../../App";

export const LoginForm = () => {
  const { auth } = useContext(Context);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      auth
        .signInWithEmailAndPassword(values.email, values.password)
        .then(() => {
          alert("You successfully signed in.");
        })
        .catch((err) => alert(err.message));

      // alert(JSON.stringify(values, null, 2));
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
