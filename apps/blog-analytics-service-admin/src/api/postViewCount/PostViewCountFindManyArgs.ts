import { PostViewCountWhereInput } from "./PostViewCountWhereInput";
import { PostViewCountOrderByInput } from "./PostViewCountOrderByInput";

export type PostViewCountFindManyArgs = {
  where?: PostViewCountWhereInput;
  orderBy?: Array<PostViewCountOrderByInput>;
  skip?: number;
  take?: number;
};
