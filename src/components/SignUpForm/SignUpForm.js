import { useFormik } from "formik";
import { PasswordInput, TextInput, ContainedButton } from "../index";
// import { useHistory } from "react-router-dom";
import firebase from "../../firebase/firebase.utils";

export const SignUpForm = () => {
  // const history = useHistory();

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
        firebase.signUp(values.username, values.email, values.password);
        // history.push("/");
        // alert(JSON.stringify(values, null, 2));
      }
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <TextInput
        type="username"
        name="username"
        onChange={(value) => formik.handleChange(value)}
        value={formik.values.username}
        label="Username"
      />
      <TextInput
        type="email"
        name="email"
        onChange={(value) => formik.handleChange(value)}
        value={formik.values.email}
        label="Email"
      />
      <PasswordInput
        label="Password"
        onChange={formik.handleChange}
        value={formik.values.password}
        id="password"
        name="password"
      />
      <PasswordInput
        label="Confirm Password"
        onChange={formik.handleChange}
        value={formik.values.confirmedPassword}
        id="confirmedPassword"
        labelWidth={135}
      />
      <ContainedButton
        backgroundColor="rgb(178,223,252)"
        type="submit"
        text="Sign Up"
      />
    </form>
  );
};
