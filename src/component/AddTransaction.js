import React from "react";

export const AddTransaction=()=>{
    return(
        <>
            <h3>Add new transaction</h3>
            <form>
                <div className="form-group">
                    <label htmlFor="text">Text</label>
                    <input type="text" id="text" placeholder="Enter text..."/>
                </div>
                <br/>
                <div className="form-group">
                    <label htmlFor="amount">
                        Amount <br/>
                        (negative - expense, positive - income)
                    </label>
                    <input type="number" id="amount" placeholder="Enter amount..."/>
                </div>
                <div className="form-group">
                    <button className="btn">Add transaction</button>
                </div>

            </form>
        </>
    );
}