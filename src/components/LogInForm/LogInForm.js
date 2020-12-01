import { Formik } from "formik";
import { PasswordInput, TextInput, ContainedButton } from "../index";
import firebase from "../../firebase/firebase.utils";
import * as yup from "yup";

const LogInSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Required"),
});

export const LogInForm = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={(values) => {
        firebase.signIn(values.email, values.password);
        // alert(JSON.stringify(values, null, 2));
      }}
      validationSchema={LogInSchema}
    >
      {(props) => (
        <form onSubmit={props.handleSubmit}>
          <TextInput
            type="email"
            name="email"
            label="Email"
            onChange={(value) => props.handleChange(value)}
            value={props.values.email}
            // formik.touched is an object. It is an empty object before submit click.
            // It takes key\value after submit click. for example => {email: true, password: true}

            // if error property is true, border color turns to red.
            error={props.touched.email && props.errors.email}
            // error messages are shown by helperText property.
            helperText={props.touched.email && props.errors.email}
          />
          <PasswordInput
            id="password"
            label="Password"
            onChange={props.handleChange}
            value={props.values.password}
            name="password"
            error={props.touched.password && props.errors.password}
            helperText={props.touched.password && props.errors.password}
          />
          <ContainedButton
            text="Log In"
            type="submit"
            backgroundColor="rgb(178,223,252)"
          />
        </form>
      )}
    </Formik>
  );
};
