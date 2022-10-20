import { ExpensesType } from "./expenses.type";

/**
 * Expenses that each user makes during the trip
 */
export interface Expenses {
  cost: number,
  description?: string,
  type?: ExpensesType
}