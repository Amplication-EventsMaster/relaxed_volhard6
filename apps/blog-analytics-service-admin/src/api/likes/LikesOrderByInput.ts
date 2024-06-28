import { SortOrder } from "../../util/SortOrder";

export type LikesOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  likedAt?: SortOrder;
  userId?: SortOrder;
  postId?: SortOrder;
};
