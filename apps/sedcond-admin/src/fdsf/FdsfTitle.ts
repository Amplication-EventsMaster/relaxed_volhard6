import { Fdsf as TFdsf } from "../api/fdsf/Fdsf";

export const FDSF_TITLE_FIELD = "id";

export const FdsfTitle = (record: TFdsf): string => {
  return record.id?.toString() || String(record.id);
};
