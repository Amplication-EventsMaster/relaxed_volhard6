export type PostViewCount = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  views: number | null;
  postId: string | null;
};
