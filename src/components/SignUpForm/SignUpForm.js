import { useFormik } from "formik";
import { PasswordInput, TextInput, ContainedButton } from "../index";
// import { useHistory } from "react-router-dom";
import firebase from "../../firebase/firebase.utils";
import * as yup from "yup";

const SignUpSchema = yup.object().shape({
  username: yup
    .string()
    .required("Required")
    .min(5, "Username must be at least 5 characters"),
  email: yup.string().email("Invalid email").required("Required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Required"),
  confirmedPassword: yup
    .string()
    .required("Required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

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
    validationSchema: SignUpSchema,
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <TextInput
        type="username"
        name="username"
        onChange={(value) => formik.handleChange(value)}
        value={formik.values.username}
        label="Username"
        error={formik.touched.username && formik.errors.username}
        helperText={formik.touched.username && formik.errors.username}
      />
      <TextInput
        type="email"
        name="email"
        onChange={(value) => formik.handleChange(value)}
        value={formik.values.email}
        label="Email"
        error={formik.touched.email && formik.errors.email}
        helperText={formik.touched.email && formik.errors.email}
      />
      <PasswordInput
        label="Password"
        onChange={formik.handleChange}
        value={formik.values.password}
        id="password"
        name="password"
        error={formik.touched.password && formik.errors.password}
        helperText={formik.touched.password && formik.errors.password}
      />
      <PasswordInput
        label="Confirm Password"
        onChange={formik.handleChange}
        value={formik.values.confirmedPassword}
        id="confirmedPassword"
        labelWidth={135}
        error={
          formik.touched.confirmedPassword && formik.errors.confirmedPassword
        }
        helperText={
          formik.touched.confirmedPassword && formik.errors.confirmedPassword
        }
      />
      <ContainedButton
        backgroundColor="rgb(178,223,252)"
        type="submit"
        text="Sign Up"
      />
    </form>
  );
};
