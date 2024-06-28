import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SharesWhereInput = {
  id?: StringFilter;
  sharedAt?: DateTimeNullableFilter;
  userId?: StringNullableFilter;
  postId?: StringNullableFilter;
};
