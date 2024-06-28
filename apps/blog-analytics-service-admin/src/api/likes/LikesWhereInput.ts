import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type LikesWhereInput = {
  id?: StringFilter;
  likedAt?: DateTimeNullableFilter;
  userId?: StringNullableFilter;
  postId?: StringNullableFilter;
};
