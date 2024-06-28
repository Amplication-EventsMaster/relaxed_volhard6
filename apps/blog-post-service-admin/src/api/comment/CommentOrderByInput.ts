import { SortOrder } from "../../util/SortOrder";

export type CommentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  blogPostId?: SortOrder;
  author?: SortOrder;
  content?: SortOrder;
};
