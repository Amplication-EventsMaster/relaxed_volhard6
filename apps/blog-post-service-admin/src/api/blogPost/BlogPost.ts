import { Comment } from "../comment/Comment";

export type BlogPost = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | null;
  publishedAt: Date | null;
  title: string | null;
  author: string | null;
  comments?: Array<Comment>;
};
