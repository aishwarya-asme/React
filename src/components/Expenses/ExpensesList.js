import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList=props=>{

    // let expenseContent=<p>No expenses found.</p>

    if(props.items.length===0){
        return <h2 className="expense-list fallback">Found no expenses</h2>
    }
    else if(props.items.length===1){
        
    return (<div>
        <ul className="expenses-list">
        {props.items.map((expense)=>(
            <ExpenseItem 
                    key={expense.id}
                    title={expense.title} 
                    amount={expense.amount} 
                    date={expense.date}
                    />
        ))
        }
        </ul>

    <p className="Single-expense-message">Only single Expense here.Please add more..</p>        

    </div>
    );
    }

    else{
        return(
            <ul className="expense-list">
               { 
               props.items.map((expense)=>
                (
            <ExpenseItem 
                    key={expense.id}
                    title={expense.title} 
                    amount={expense.amount} 
                    date={expense.date}
                    />
            ))
         }
            </ul>
        );
    }
};

export default ExpensesList;