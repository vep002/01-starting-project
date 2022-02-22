import React , {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import "./ExpenseList.css";
import Card from './Card';

export default function ExpenseList(props) {
  const [filteredYear, setFilteredYear] = useState('2020');


  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.expenses.filter((expense)=> {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <ExpenseFilter onFilter={filterChangeHandler} selected={filteredYear}/>
      <Card className="expenses">
        {filteredExpenses.length === 0 ? (
        <p>No Expenses Found</p>
        ) : (
        filteredExpenses.map((expense) => 
          {return <ExpenseItem
            key={expense.id} 
            title={expense.title} 
            amount={expense.amount} 
            date={expense.date}
            />})
        )}
      </Card>
    </div>
  );

}
