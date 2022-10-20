import { Expenses } from "./expenses";

/**
 * Trip attendant who may have some expenses
 */
export interface Attendant {
  name: string,
  expenses: Expenses[],
}