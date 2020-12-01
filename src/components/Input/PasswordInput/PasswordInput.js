import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: "4px 0",
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "25ch",
    backgroundColor: "rgb(250,250,250)",
    width: "100%",
  },
}));

export function PasswordInput({
  onChange,
  value,
  label,
  id,
  labelWidth,
  name,
  error,
  helperText,
}) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    confirmedPassword: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  console.log("h", helperText);

  // const handleChange = (prop) => (event) => {
  //   setValues({ ...values, [prop]: event.target.value });
  // };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <FormControl
      className={clsx(classes.margin, classes.textField)}
      variant="outlined"
      size="small"
    >
      <InputLabel htmlFor="password">{label}</InputLabel>
      <OutlinedInput
        id={id}
        name={name}
        type={values.showPassword ? "text" : "password"}
        value={value}
        onChange={onChange}
        error={error}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {values.showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
        labelWidth={labelWidth ? labelWidth : 70}
      />
      {helperText ? (
        <p
          style={{
            margin: "0",
            padding: "5px 12px",
            color: "red",
            fontSize: "12px",
            textAlign: "start",
          }}
        >
          {helperText}
        </p>
      ) : null}
    </FormControl>
  );
}
