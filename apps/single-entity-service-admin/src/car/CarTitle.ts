import { Car as TCar } from "../api/car/Car";

export const CAR_TITLE_FIELD = "id";

export const CarTitle = (record: TCar): string => {
  return record.id?.toString() || String(record.id);
};
