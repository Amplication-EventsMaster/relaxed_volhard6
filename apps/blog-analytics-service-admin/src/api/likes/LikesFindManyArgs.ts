import { LikesWhereInput } from "./LikesWhereInput";
import { LikesOrderByInput } from "./LikesOrderByInput";

export type LikesFindManyArgs = {
  where?: LikesWhereInput;
  orderBy?: Array<LikesOrderByInput>;
  skip?: number;
  take?: number;
};
