import moment from "moment";
export enum apiDateTimeFormat {
  ISODate = "YYYY-DD-MM",
  TimeWithOutSeconds = "LT",
  ClientDate = "MM/DD/YYYY",
  DateTimeDuration = "YYYY-DD-MM • HH:mm",
  HoursTime = "h:mm a",
}

const getDateTimeFormat = (date: Date | string, format?: apiDateTimeFormat) => {
  const effectiveFormat =
    format ?? apiDateTimeFormat.ClientDate ?? apiDateTimeFormat;
  return moment(date).format(effectiveFormat);
};

export default {
  getDateTimeFormat,
  apiDateTimeFormat,
};
