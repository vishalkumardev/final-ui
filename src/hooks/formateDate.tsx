import moment from "moment";

const formateDate = (value: string, format: string = "DD-MM-YYYY") => {
  const date = moment(value).format(format);
  return date;
};

export { formateDate };
