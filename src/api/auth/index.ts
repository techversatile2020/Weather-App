import { LoginBodyType, ResetPasswordBodyType } from "../../models";
import httpService from "../https.service";

const userLogin = (body: LoginBodyType) => {
  return httpService().post("user/login", body);
  // return httpService().post("auth/user/login", body);
};

const setResetPasswordApi = (body: ResetPasswordBodyType) => {
  return httpService().post("user/request-password-reset", body);
};

export const AuthAPIS = {
  userLogin,
  setResetPasswordApi,
};
