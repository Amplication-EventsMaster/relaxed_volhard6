import { HelloWhereInput } from "./HelloWhereInput";
import { HelloOrderByInput } from "./HelloOrderByInput";

export type HelloFindManyArgs = {
  where?: HelloWhereInput;
  orderBy?: Array<HelloOrderByInput>;
  skip?: number;
  take?: number;
};
