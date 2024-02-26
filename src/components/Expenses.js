import React,{useState} from "react";
// import ExpenseItem from "./Expenses/ExpenseItem";
import Card from "./Card";
import './Expenses.css';
import ExpensesFilter from "./Expenses/ExpensesFilter";
import ExpensesList from "./Expenses/ExpensesList";
import ExpensesChart from "./Expenses/ExpensesChart";



const Expenses = (props)=>{

    const [filteredYear,setFilteredYear]=useState('2020');

    const filterChangeHandler=(selectedYear)=>{
        setFilteredYear(selectedYear);
    };

    const filteredExpenses=props.items.filter(expense=>{
        return expense.date.getFullYear().toString()===filteredYear;
    });

    return(
     <div>
        <Card className="expenses">
            <ExpensesFilter 
            selected={filteredYear} 
            onChangeFilter={filterChangeHandler}
            />
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses}/>
{/* 
            {expenseContent} */}
            {/* {filteredExpenses.length===0 && <p>No expenses found.</p>}
            {filteredExpenses.length>0 &&
         
                filteredExpenses.map((expense)=>(
                <ExpenseItem 
                    key={expense.id}
                    title={expense.title} 
                    amount={expense.amount} 
                    date={expense.date}
                    />
                ))} */}
           
        {/* <ExpenseItem
         title={props.items[0].title} 
         amount={props.items[0].amount} 
         date={props.items[0].date}
         LocationOfExpenditure={props.items[0].LocationOfExpenditure}
       />

      <ExpenseItem 
      title={props.items[1].title} 
      amount={props.items[1].amount} 
      date={props.items[1].date}
      LocationOfExpenditure={props.items[1].LocationOfExpenditure}
      />

      <ExpenseItem 
      title={props.items[2].title} 
      amount={props.items[2].amount} 
      date={props.items[2].date}
      LocationOfExpenditure={props.items[2].LocationOfExpenditure}
      />

      <ExpenseItem 
      title={props.items[3].title} 
      amount={props.items[3].amount} 
      date={props.items[3].date}
      LocationOfExpenditure={props.items[3].LocationOfExpenditure} */}
      
      </Card>
</div>
      
  );
 };

 export default Expenses;
