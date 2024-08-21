import * as Yup from "yup";
import { CommonUtils } from "../utils";
import { InputEnums } from "../constants";

const KeywordDataSchema = Yup.object().shape({
  [InputEnums.Keyword]: Yup.string().required("Please enter a keyword"),
});

const CreditCardDataSchema = Yup.object().shape({
  [InputEnums.CreditCardNumber]: Yup.string()
    ?.matches(CommonUtils.isNumberWithDashed, "Invalid credit card number")
    .required("Please enter a credit card number"),
});

const SocialSecurityDataSchema = Yup.object().shape({
  [InputEnums.Ssn]: Yup.string()
    // ?.matches(CommonUtils.ssnRegex, "Invalid SSN")
    .required("Please enter a social security number"),
});

const EmailAddressDataSchema = Yup.object().shape({
  [InputEnums.Email]: Yup.string()
    .email("Invalid email format")
    .matches(CommonUtils.emailRegex, "Invalid email")
    .required("Please enter an email address"),
});

export default {
  KeywordDataSchema,
  CreditCardDataSchema,
  SocialSecurityDataSchema,
  EmailAddressDataSchema,
};
