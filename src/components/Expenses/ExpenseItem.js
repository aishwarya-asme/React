import React from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import ExpenseDetails from './ExpenseDetails';
import Card from '../Card';



const ExpenseItem=(props)=>{
// {   const [title, setTitle] = useState(props.title);
//     const [amount,setAmount]= useState(props.amount);
    // let title=props.title;

    
    // const clickHandler= () =>{
    //     setTitle("Updated!");
    //     // title='Updated';
    //     console.log(title);
    // };

    // const deleteHandler=()=>{
    //     // title='Deleted';
    //     setTitle('deleted!');
    //     console.log(title);
    // };

    // const changeAmountHandler=()=>{
    //     setAmount(100);
    //     console.log(amount);
    // };
    
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
                <h2>{props.title}</h2>
            <ExpenseDetails
            // title={props.title}
            // amount={amount}
                
            LocationOfExpenditure={props.LocationOfExpenditure}/>
            
            {/* <div>{props.date.toISOString()}</div>  */}
            {/* <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
                <div className='LocationOfExpenditure'>{props.LocationOfExpenditure}</div>
            </div>
        </div> */}
        {/* <button onClick={clickHandler}>Change Title</button>
        <button onClick={deleteHandler}>Delete Expense</button>
        <button onClick={changeAmountHandler}>Change Amount to $100</button> */}
        </Card>
    );
}


export default ExpenseItem;