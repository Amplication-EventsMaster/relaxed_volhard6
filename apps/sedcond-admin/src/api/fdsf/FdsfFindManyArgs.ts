import { FdsfWhereInput } from "./FdsfWhereInput";
import { FdsfOrderByInput } from "./FdsfOrderByInput";

export type FdsfFindManyArgs = {
  where?: FdsfWhereInput;
  orderBy?: Array<FdsfOrderByInput>;
  skip?: number;
  take?: number;
};
