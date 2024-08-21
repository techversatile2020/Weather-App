import * as Yup from "yup";
import { CommonUtils } from "../utils";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .matches(CommonUtils.emailRegex, "Invalid email")
    .required("Please enter your email address."),
  password: Yup.string().required("Please enter your password."),
  // date: Yup.date().required("Please select your date of birth."),
});

const ResetPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .matches(CommonUtils.emailRegex, "Invalid email")
    .required("Please enter your email address."),
});


export default {
  LoginSchema,
  ResetPasswordSchema,
};
