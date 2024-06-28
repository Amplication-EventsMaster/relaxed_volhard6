import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PostViewCountWhereInput = {
  id?: StringFilter;
  views?: IntNullableFilter;
  postId?: StringNullableFilter;
};
