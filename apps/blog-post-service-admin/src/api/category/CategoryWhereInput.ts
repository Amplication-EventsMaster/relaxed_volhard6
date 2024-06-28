import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CategoryWhereInput = {
  id?: StringFilter;
  description?: StringNullableFilter;
  name?: StringNullableFilter;
};
