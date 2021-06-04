import React,{useContext} from "react";
import {GlobalContext} from "../context/GlobalState";

export const Transaction =({transition})=>{
    const sign =transition.amount <0 ?'-':'+';

    return(
        <li className={transition.amount<0 ? "minus":"plus"}>
            {transition.text} <span>{sign}${Math.abs(transition.amount)}</span><button className="delete-btn">x</button>
        </li>
    );
}