import { address, datatype, name } from 'faker';
import { Expenses } from 'src/app/models/expenses';
import { Participator } from 'src/app/models/participator';

/**
 * Factory to create a mock trip entity
 */
export const tripFactory = (user: string, tripUuid: string) => {
  return {
    name: `Trip to ${address.cityName()}`,
    isFinished: false,
    uuid: tripUuid,
    attenders: (() => {

      const participators: Participator[] = [{
        name: user,
        expenses: generateExpenses(),
      }];

      for (let i = 0; i < datatype.number({ min: 3, max: 5 }); i++) {
        participators.push({
          name: name.findName(),
          expenses: generateExpenses(),
        })
      }

      return participators;
    })(),
  }
};

const generateExpenses = () => {
  const expenses: Expenses[] = [];

  for (let i = 0; i < datatype.number({ min: 3, max: 5 }); i++) {
    expenses.push({
      cost: Math.round(Math.random() * 100 * 30) / 100
    })
  }

  return expenses;
}