import React,{useEffect, useState} from 'react';
import axios from "axios";
import "./header.css";
import CompHistory from "./history";

const Content = () => {
    const [Principle, setPrinciple] = useState(0);
    const [monthly, setmonthly] = useState(0);
    const [numberofPayments , setnumberofpayments] = useState(0);
    const [amount,setamount] = useState(500);
    const [months,setmonths] = useState(6);
    const handleChange = (e) => {
        console.log(e.target.value);
        setamount(e.target.value);
    };
    const handleChangemonths = (e) => {
        console.log(e.target.value);
        
        setmonths(e.target.value);
    }

    useEffect(() => {
        const values= [];
        axios
        .get(
            `https://ftl-frontend-test.herokuapp.com/interest?amount=${amount}&numMonths=${months}`
        )
        .then(res => {
            setPrinciple(res.data.interestRate);
            setmonthly(res.data.monthlyPayment.amount);
            setnumberofpayments(res.data.numPayments);
            localStorage.saveData = JSON.stringify(res.data);
        })
        .catch(e => console.log(e));

    },[amount,months]);
    
    
    return (
        <div className="content">
           <div className="content1">
           <div className="container is-fullhd">
           <h1>Response in localStorage: </h1>
           <br></br>
           <div className="notification">
           <CompHistory history1={Principle} history2={monthly} history3={numberofPayments}/>        
          </div>
             
           </div>
           </div>
            <div className="content2">
                  <div className="card">
                   <p style={{float:"right"}}>*note: all the money is in USD</p>
                   <br/>
                   <form>
                            <div className="field">
                            <label className="label">Amount range(500 to 5000)</label>
                            <br/>
                            <input className="progress" type="range" min={500} max={5000} onChange={handleChange} />
                             <div>{amount}</div>
                            </div>
                            <br/>
                            <label className="label">Months range(6 to 24)</label>
                                <br/>
                                <input className="progress" type="range" min={6} max={24} defaultValue={6} onChange={handleChangemonths} /> 
                            <div>{months}</div>
                    </form>
                        <br/>
                        <div className="message message is-danger is-medium">
                            <div className="message-header">
                                <p>Required Result:</p>
                               
                            </div>
                            <div className="message-body">
                               <p>Intrest Rate : {Principle}</p>
                                <p>Monthly Payments : {monthly}</p>
                                <p>Payments:{numberofPayments}</p>
                           
                            </div>
                        </div>

                    <div>
                    
                    </div>
                  </div>
            </div>
        </div>
    );
};

export default Content;