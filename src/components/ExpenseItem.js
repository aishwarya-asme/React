import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import ExpenseDetails from './ExpenseDetails';
import Card from './Card';
import React from 'react';

function ExpenseItem(props)
{
    const clickHandler=()=>{
        console.log('clicked!!!');
    };
    const deleteHandler=()=>{
        console.log('clicked!!!');
    };
    
    // return (
    //     <div>
    //          <div>food Rs10</div>
    //          <div> Petrol Rs 100</div>
    //          <div>Movies Rs 200</div >
    //     </div>
    // );

    // const expenseDate =new Date(2021, 2, 28);
    // const expenseTitle='car Insurance';
    // const expenseAmount=294.67;
    // const LocationOfExpenditure='shop';
    
    return(
        
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>

            <ExpenseDetails
            title={props.title}
            amount={props.amount}
            LocationOfExpenditure={props.LocationOfExpenditure}/>
            
            {/* <div>{props.date.toISOString()}</div>  */}
            {/* <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
                <div className='LocationOfExpenditure'>{props.LocationOfExpenditure}</div>
            </div>
        </div> */}
        <button onClick={clickHandler}>Change Title</button>
        <button onClick={deleteHandler}>Delete Expense</button>
        </Card>
    );
}


export default ExpenseItem;