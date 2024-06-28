import { BlogPost } from "../blogPost/BlogPost";

export type Comment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  blogPost?: BlogPost | null;
  author: string | null;
  content: string | null;
};
