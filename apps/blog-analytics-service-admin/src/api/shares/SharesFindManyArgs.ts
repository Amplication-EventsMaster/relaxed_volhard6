import { SharesWhereInput } from "./SharesWhereInput";
import { SharesOrderByInput } from "./SharesOrderByInput";

export type SharesFindManyArgs = {
  where?: SharesWhereInput;
  orderBy?: Array<SharesOrderByInput>;
  skip?: number;
  take?: number;
};
