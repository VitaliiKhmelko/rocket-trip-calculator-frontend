import { Expenses } from "./expenses";

/**
 * Trip attender who may have some expenses
 */
export interface Attender {
  name: string,
  expenses: Expenses[],
}