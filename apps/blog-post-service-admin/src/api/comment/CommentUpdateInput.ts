import { BlogPostWhereUniqueInput } from "../blogPost/BlogPostWhereUniqueInput";

export type CommentUpdateInput = {
  blogPost?: BlogPostWhereUniqueInput | null;
  author?: string | null;
  content?: string | null;
};
