import { SortOrder } from "../../util/SortOrder";

export type PostViewCountOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  views?: SortOrder;
  postId?: SortOrder;
};
