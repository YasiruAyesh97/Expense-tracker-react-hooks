import React,{useContext} from "react";
import {GlobalContext} from "../context/GlobalState";
import {Transaction} from "./Transcation";

export const TransactionList =()=>{
    const {transitions} =useContext(GlobalContext);
    console.log(transitions);
    return(
        <>
            <h4>Your Balance</h4>
            <h3>History</h3>
            <ul id="list" className="list">
                {transitions.map(transition =>(<Transaction transition={transition}/> ))}

            </ul>
        </>
    );
}