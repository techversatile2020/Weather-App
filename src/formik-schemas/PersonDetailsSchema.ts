import * as Yup from "yup";
import { CommonUtils } from "../utils";
import { InputEnums } from "../constants";

const NameAndLocationSchema = Yup.object().shape({
  [InputEnums.FirstName]: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .matches(CommonUtils.fullNameRegex, "Invalid name")
    .required("Please enter first name."),
  [InputEnums.LastName]: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .matches(CommonUtils.fullNameRegex, "Invalid name")
    .required("Please enter last name."),
  [InputEnums.CityState]: Yup.string()?.required(
    "Please enter city and state."
  ),
});

const NameAndDOBSchema = Yup.object().shape({
  [InputEnums.FirstName]: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .matches(CommonUtils.fullNameRegex, "Invalid name")
    .required("Please enter first name."),
  [InputEnums.LastName]: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .matches(CommonUtils.fullNameRegex, "Invalid name")
    .required("Please enter last name."),
  [InputEnums.Dob]: Yup.string()
    .required("Please select date of birth.")
    .matches(CommonUtils.dateRegex, "Invalid date format. Use MM/DD/YYYY")
    .test("is-valid-date", "Invalid date", (value) => {
      if (value) {
        const [month, day, year] = value.split("/");
        const date = new Date(`${year}-${month}-${day}`);
        return (
          date.getDate() == Number(day) &&
          date.getMonth() + 1 == Number(month) &&
          date.getFullYear() == Number(year)
        );
      }
      return false;
    }),
});

const SocialSecuritySchema = Yup.object().shape({
  [InputEnums.Ssn]: Yup.string()
    // ?.matches(CommonUtils.ssnRegex, "Invalid SSN")
    .required("Please enter SSN."),
});

const EmailAddressDataSchema = Yup.object().shape({
  [InputEnums.Email]: Yup.string()
    .matches(CommonUtils.emailRegex, "Invalid email")
    .required("Please enter email address."),
});

const HomeAddressSchema = Yup.object().shape({
  // [InputEnums.Street]: Yup.string().required("Please enter street address."),
  [InputEnums.Street]: Yup.string(),
  [InputEnums.Apartment]: Yup.string(),
  [InputEnums.City]: Yup.string().required("Please enter city."),
  [InputEnums.State]: Yup.string().required("Please enter state."),
  [InputEnums.Zip]: Yup.string(),
});

const PhoneNumberSchema = Yup.object().shape({
  [InputEnums.Phone]: Yup.string()
    // ?.matches(CommonUtils.isNumber, "Invalid phone number")
    .required("Please enter phone number."),
});

export default {
  NameAndLocationSchema,
  NameAndDOBSchema,
  SocialSecuritySchema,
  EmailAddressDataSchema,
  HomeAddressSchema,
  PhoneNumberSchema,
};
