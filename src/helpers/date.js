import { parse, format } from "date-fns";

export const parseDate = date => {
  return parse(date, "dd.MM.yyyy", new Date());
};

export const formatDate = date => {
  return format(date, "dd.MM.yyyy");
};
