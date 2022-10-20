import { address, datatype, name } from 'faker';
import { Attender } from 'src/app/models/attender';
import { Expenses } from 'src/app/models/expenses';

/**
 * Factory to create a mock trip entity
 */
export const tripFactory = (user: string) => {
  return {
    name: `Trip to ${address.cityName()}`,
    isFinished: false,
    uuid: datatype.uuid(),
    attenders: (() => {

      const attenders: Attender[] = [{
        name: user,
        expenses: generateExpenses(),
      }];

      for (let i = 0; i < datatype.number({ min: 3, max: 5 }); i++) {
        attenders.push({
          name: name.findName(),
          expenses: generateExpenses(),
        })
      }

      return attenders;
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