import { SortOrder } from "../../util/SortOrder";

export type SharesOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  sharedAt?: SortOrder;
  userId?: SortOrder;
  postId?: SortOrder;
};
