export type Shares = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  sharedAt: Date | null;
  userId: string | null;
  postId: string | null;
};
