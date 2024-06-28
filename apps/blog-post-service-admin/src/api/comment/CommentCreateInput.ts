import { BlogPostWhereUniqueInput } from "../blogPost/BlogPostWhereUniqueInput";

export type CommentCreateInput = {
  blogPost?: BlogPostWhereUniqueInput | null;
  author?: string | null;
  content?: string | null;
};
