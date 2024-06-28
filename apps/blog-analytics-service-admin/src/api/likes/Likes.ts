export type Likes = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  likedAt: Date | null;
  userId: string | null;
  postId: string | null;
};
