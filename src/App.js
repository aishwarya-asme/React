import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses=[
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      LocationOfExpenditure :'store',
    },

    { id: 'e2', 
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12),
      LocationOfExpenditure :'Electronics shop',
     },

    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      LocationOfExpenditure :'car Insurance company',
    },

    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      LocationOfExpenditure :'Furniture shop',
    },
  ];
  const expenseComponents = [];

  for (let i = 0; i < expenses.length; i++) {
    const expense = expenses[i];
    expenseComponents.push(
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        LocationOfExpenditure={expense.LocationOfExpenditure}
      />
    );
  }

  return (
    <div>
      <h2>Expense Items</h2>
      {expenseComponents}
    </div>
  );
}

export default App;
//   return (
//      <div>
//       <h2>Expense Item</h2>
//       <ExpenseItem title={expenses[0].title} 
//       amount={expenses[0].amount} 
//       date={expenses[0].date}
//       LocationOfExpenditure={expenses[0].LocationOfExpenditure}>
//       </ExpenseItem>

//       <ExpenseItem 
//       title={expenses[1].title} 
//       amount={expenses[1].amount} 
//       date={expenses[1].date}
//       LocationOfExpenditure={expenses[1].LocationOfExpenditure}
//       ></ExpenseItem>

//       <ExpenseItem 
//       title={expenses[2].title} 
//       amount={expenses[2].amount} 
//       date={expenses[2].date}
//       LocationOfExpenditure={expenses[2].LocationOfExpenditure}
//       ></ExpenseItem>

//       <ExpenseItem 
//       title={expenses[3].title} 
//       amount={expenses[3].amount} 
//       date={expenses[3].date}
//       LocationOfExpenditure={expenses[3].LocationOfExpenditure}
//       ></ExpenseItem>
//       </div>
//   );
// }

// export default App;
