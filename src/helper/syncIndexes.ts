import { journalModel } from "../models/journal";
import { lockModel } from "../models/lock";
import { transactionModel } from "../models/transaction";

export async function syncIndexes(options?: { background: boolean }) {
  await journalModel.syncIndexes(options);
  await transactionModel.syncIndexes(options);
  await lockModel.syncIndexes(options);
}
