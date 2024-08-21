import { Linking, NativeScrollEvent, NativeSyntheticEvent, Platform } from "react-native";
import { toast } from "./toast.utils";
import _ from "lodash"; // Import lodash library

const objectContainsKey = (
  object: Record<string | number, any>,
  key: number | string
) => {
  return typeof object === "object" && object && object[key] !== undefined;
};

const handleScrollToBottom = (
  event: NativeSyntheticEvent<NativeScrollEvent>,
  onEndReached: () => void
) => {
  const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent;
  const scrollThreshold = 0.9; // 10% before reaching the bottom
  if (
    contentOffset.y + layoutMeasurement.height >=
    scrollThreshold * contentSize.height
  ) {
    onEndReached();
  }
};

/**
 * Will convert an array of objects into an object with
 * desired value as the key, can optianlly add or delete
 * values from original object as well while converting.
 */
function getObjectByKeys(
  arr: Array<Record<string, any>>,
  key: string = "id",
  deleteKey: string | null = null,
  addKeys: Record<string, any> | null = null
) {
  const obj: any = {};
  arr.forEach((val) => {
    obj[val[key]] = val;
    if (deleteKey) {
      delete obj[val[key]][deleteKey];
    }
    if (addKeys) {
      obj[val[key]] = {
        ...obj[val[key]],
        ...addKeys,
      };
    }
  });
  return obj;
}

/**
 * we can use Promise.allSettled as well but
 * due to less browser support added custom one.
 */
const promiseAllSettled = (promises: any) =>
  Promise.all(
    promises.map((p: any) =>
      p
        .then((value: any) => ({
          status: "fulfilled",
          value,
        }))
        .catch((reason: any) => ({
          status: "rejected",
          reason,
        }))
    )
  );

const callNumber = (phoneNumber?: string) => {
  if (phoneNumber) {
    Linking.openURL(`tel:${phoneNumber}`);
  } else {
    toast.fail(`User does'nt have phone number`);
  }
};

const sendMail = (recipient?: string) => {
  if (recipient) {
    Linking.openURL(`mailto:${recipient}`);
  } else {
    toast.fail(`User does'nt have mail`);
  }
};

const sendMessage = (message?: string) => {
  if (message) {
    Linking.openURL(`sms:${message}`);
  } else {
    toast.fail(`User does'nt have phone number`);
  }
};

const openMaps = (latitude: number, longitude: number) => {
  const daddr = `${latitude},${longitude}`;
  const company = Platform.OS === "ios" ? "google" : "google";
  Linking.openURL(`http://maps.${company}.com/maps?daddr=${daddr}`);
}

const debouncedFunction = _.debounce((callback) => {
  callback(); // Call your function here
}, 300); // Adjust the debounce delay (in milliseconds) as needed

const generateFilledArray = (length: number): number[] => {
  return new Array(length).fill(1);
};

const emailRegex =
  /^[A-Za-z0-9._%+-]*[A-Za-z][A-Za-z0-9._%+-]*@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const fullNameRegex = /^[A-Za-z\s]+$/;
const isNumber = /^[0-9]+$/;
const isNumberWithDashed = /^[0-9-]+$/;
const ssnRegex = /^\d{3}-\d{2}-\d{4}$/;
const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(19|20)\d\d$/; //  MM/DD/YYYY

export default {
  objectContainsKey,
  handleScrollToBottom,
  getObjectByKeys,
  promiseAllSettled,
  callNumber,
  sendMail,
  sendMessage,
  generateFilledArray,
  openMaps,
  debouncedFunction,
  emailRegex,
  fullNameRegex,
  isNumber,
  isNumberWithDashed,
  ssnRegex,
  dateRegex,
};
