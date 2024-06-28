import { CommentCreateNestedManyWithoutBlogPostsInput } from "./CommentCreateNestedManyWithoutBlogPostsInput";

export type BlogPostCreateInput = {
  content?: string | null;
  publishedAt?: Date | null;
  title?: string | null;
  author?: string | null;
  comments?: CommentCreateNestedManyWithoutBlogPostsInput;
};
