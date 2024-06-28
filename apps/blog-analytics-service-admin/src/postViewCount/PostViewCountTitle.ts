import { PostViewCount as TPostViewCount } from "../api/postViewCount/PostViewCount";

export const POSTVIEWCOUNT_TITLE_FIELD = "postId";

export const PostViewCountTitle = (record: TPostViewCount): string => {
  return record.postId?.toString() || String(record.id);
};
