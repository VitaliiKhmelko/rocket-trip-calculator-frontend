import { Expenses } from "./expenses";

/**
 * Trip participator with his/her spends
 */
export interface Participator {
  name: string,
  expenses: Expenses[],
}