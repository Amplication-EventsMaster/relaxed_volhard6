import { CommentUpdateManyWithoutBlogPostsInput } from "./CommentUpdateManyWithoutBlogPostsInput";

export type BlogPostUpdateInput = {
  content?: string | null;
  publishedAt?: Date | null;
  title?: string | null;
  author?: string | null;
  comments?: CommentUpdateManyWithoutBlogPostsInput;
};
