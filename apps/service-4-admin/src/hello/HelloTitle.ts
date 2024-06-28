import { Hello as THello } from "../api/hello/Hello";

export const HELLO_TITLE_FIELD = "id";

export const HelloTitle = (record: THello): string => {
  return record.id?.toString() || String(record.id);
};
