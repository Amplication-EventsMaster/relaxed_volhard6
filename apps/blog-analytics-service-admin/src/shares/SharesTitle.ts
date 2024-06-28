import { Shares as TShares } from "../api/shares/Shares";

export const SHARES_TITLE_FIELD = "userId";

export const SharesTitle = (record: TShares): string => {
  return record.userId?.toString() || String(record.id);
};
