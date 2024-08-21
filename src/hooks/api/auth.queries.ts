import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { AuthAPIS } from "../../api/auth";
import { LoginResponseType, UserModel } from "../../models";
import { setAuthentication, setToken, setUser } from "../../redux/reducers";
import { decode } from "react-native-pure-jwt";
import { toast } from "../../utils/toast.utils";
export const useLogin = () => {
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: AuthAPIS.userLogin,
    onSuccess: async (response: any) => {
      if (response?.data) {
        const { token, ...rest } = response?.data as LoginResponseType;
        const decodedUserDetails: any = await decode(token, "token", {
          skipValidation: true,
        });
        console.log("decodes =>>>>>>>>>>", decodedUserDetails?.payload);
        dispatch(setToken(token));
        dispatch(
          setUser({
            ...decodedUserDetails?.payload,
            ...rest,
            // _id: "65f8a419c441d58a92421846", // I did this only for implmentation purpose
          })
        );
        dispatch(setAuthentication(true));
      }
    },
    onError: (error: any) => {
      toast.fail(
        error?.response?.data?.error ||
          error?.response?.data?.message ||
          error?.response?.data?.msg ||
          error?.response?.error ||
          "Something went wrong. Please try again later."
      );
    },
  });
};

export const useResetPassword = ({ callback }: { callback?: () => void }) => {
  return useMutation({
    mutationFn: AuthAPIS.setResetPasswordApi,
    onSuccess: (response: any) => {
      if (response?.data) {
        toast.success("We sent you details on your email.");
        callback?.();
      }
    },
  });
};
