import { useFormik } from "formik";
import { PasswordInput, TextInput, ContainedButton } from "../index";
import firebase from "../../firebase/firebase.utils";

export const LogInForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      firebase.signIn(values.email, values.password)
      // alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <TextInput
        type="email"
        name="email"
        label="Email"
        onChange={(value) => formik.handleChange(value)}
        value={formik.values.email}
      />
      <PasswordInput
        id="password"
        label="Password"
        onChange={formik.handleChange}
        value={formik.values.password}
        name="password"
      />
      <ContainedButton
        text="Log In"
        type="submit"
        backgroundColor="rgb(178,223,252)"
      />
    </form>
  );
};
