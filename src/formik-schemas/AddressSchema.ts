import * as Yup from "yup";

const AddressSchema = Yup.object().shape({
  // street: Yup.string().required("Please enter your street address."),
  street: Yup.string(),
  apartment: Yup.string().required("Please enter your apartment number."),
  city: Yup.string().required("Please enter your city."),
  state: Yup.string().required("Please enter your state."),
  zip: Yup.string().required("Please enter your zip code."),
});

export default {
  AddressSchema,
};
