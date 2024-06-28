import { SortOrder } from "../../util/SortOrder";

export type HelloOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
};
