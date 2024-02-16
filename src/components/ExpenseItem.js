import './ExpenseItem.css';
function ExpenseItem(props)
{
    
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
        
        <div className='expense-item'>
            <div>{props.date.toISOString()}</div>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
                <div className='LocationOfExpenditure'>{props.LocationOfExpenditure}</div>
            </div>
        </div>
    );
}


export default ExpenseItem;