import React , {useState} from 'react';
import ExpenseList from './components/ExpenseList';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 5.99,
    date: new Date(2020, 7, 5)
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 100,
    date: new Date(2020, 10, 15)
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 150.67,
    date: new Date(2021, 2, 2)
  },
  {
    id: 'e4',
    title: 'New Desk',
    amount: 69.99,
    date: new Date(2021, 5, 13)
  }
]



function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <ExpenseList expenses = {expenses} />
    </div>
  );
}

export default App;
