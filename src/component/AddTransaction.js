import React, {useContext, useState} from "react";
import {GlobalContext} from '../context/GlobalState';

export const AddTransaction=()=>{
    const [text,setText]=useState('');
    const [amount,setAmount]=useState(0);
    const {addTransition} =useContext(GlobalContext);
    const onSubmit =(e) =>{
        e.preventDefault();

        const newTransaction ={
            id:Math.floor(Math.random()*1000000),
            text,
            amount :+amount,
        }
        addTransition(newTransaction);
    }


    return(
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <br/>
                <div className="form-group">
                    <label htmlFor="amount">
                        Amount <br/>
                        (negative - expense, positive - income)
                    </label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <div className="form-group">
                    <button className="btn">Add transaction</button>
                </div>

            </form>
        </>
    );
}