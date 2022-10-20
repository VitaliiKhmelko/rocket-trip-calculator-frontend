import { address, datatype, name } from 'faker';
import { Factory } from 'miragejs';
import { Attender } from 'src/app/models/attender';
import { Expenses } from 'src/app/models/expenses';
import { Trip } from 'src/app/models/trip';

/**
 * Factory to create a mock trip entity
 */
export const tripFactory = Factory.extend<Trip>({
  name: `Trip to ${address.cityName()}`,
  isFinished: false,
  attenders: () => {

    const attenders: Attender[] = [];

    for (let i = 0; i < datatype.number({ min: 3, max: 5 }); i++) {
      attenders.push({
        name: name.findName(),
        expenses: (() => {
          const expenses: Expenses[] = [];

          for (let i = 0; i < datatype.number({ min: 3, max: 5 }); i++) {
            expenses.push({
              cost: Math.round(Math.random() * 100 * 30) / 100
            })
          }

          return expenses;
        })()
      })
    }

    return attenders;
  },
  uuid: datatype.uuid()
});
