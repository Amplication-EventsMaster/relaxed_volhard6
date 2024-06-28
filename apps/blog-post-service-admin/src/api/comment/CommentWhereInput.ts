import { StringFilter } from "../../util/StringFilter";
import { BlogPostWhereUniqueInput } from "../blogPost/BlogPostWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CommentWhereInput = {
  id?: StringFilter;
  blogPost?: BlogPostWhereUniqueInput;
  author?: StringNullableFilter;
  content?: StringNullableFilter;
};
