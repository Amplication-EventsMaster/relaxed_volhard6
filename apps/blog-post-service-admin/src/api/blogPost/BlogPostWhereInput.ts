import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";

export type BlogPostWhereInput = {
  id?: StringFilter;
  content?: StringNullableFilter;
  publishedAt?: DateTimeNullableFilter;
  title?: StringNullableFilter;
  author?: StringNullableFilter;
  comments?: CommentListRelationFilter;
};
