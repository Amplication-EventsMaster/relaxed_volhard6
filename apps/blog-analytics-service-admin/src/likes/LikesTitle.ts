import { Likes as TLikes } from "../api/likes/Likes";

export const LIKES_TITLE_FIELD = "userId";

export const LikesTitle = (record: TLikes): string => {
  return record.userId?.toString() || String(record.id);
};
