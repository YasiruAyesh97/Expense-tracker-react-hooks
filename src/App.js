import React,{Component} from "react";
import {Header} from "./component/header"
import './App.css';
import {Balance} from "./component/Balance";
import {IncomeExpenses} from "./component/IncomeExpenses";
import {TransactionList} from "./component/TransactionList";
import {AddTransaction} from "./component/AddTransaction";
function App() {

    return (

       <div>
           <Header />
           <div className="container shadow-sm p-3 mb-5 bg-white rounded">
            <Balance/>
                <IncomeExpenses/>
                <TransactionList/>
                <AddTransaction  />
           </div>
       </div>
    );

}

export default App;
