import React, { useContext } from "react";
import { useFormik } from "formik";
import { Password, Email, Username, ContainedButton } from "../";
import { Context } from "../../../App";

export const LoginForm = () => {
  const { auth } = useContext(Context);

  console.log(auth.currentUser);

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmedPassword: "",
    },
    onSubmit: (values) => {
      if (values.password != values.confirmedPassword) {
        alert("Those passwords didn't match. Try again.");
      } else if (values.username.length < 5) {
        alert("Invalid username!");
      } else {
        auth
          .createUserWithEmailAndPassword(values.email, values.password)
          .then(() => {
            alert("Your account successfully created.");
            auth.currentUser.updateProfile({ displayName: values.username });
          })
          .catch((err) => alert(err.message));

        // alert(JSON.stringify(values, null, 2));
      }
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
      <Password
        label="Password"
        onChange={formik.handleChange}
        value={formik.values.password}
        id="password"
      />
      <Password
        label="Confirm Password"
        onChange={formik.handleChange}
        value={formik.values.confirmedPassword}
        id="confirmedPassword"
      />
      <ContainedButton
        backgroundColor="rgb(178,223,252)"
        type="submit"
        text="Sign Up"
      />
    </form>
  );
};
