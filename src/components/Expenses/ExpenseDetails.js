import './ExpenseDetails.css';
import React from 'react';
function ExpenseDetails(props){
    return (
        <div className="expense-details">
            <h2>{props.title}</h2>
            <div className="expense-details__price">{props.amount}</div>
            <div className="expense-details__location">{props.LocationOfExpenditure}</div>
            </div>
    );
}

export default ExpenseDetails;