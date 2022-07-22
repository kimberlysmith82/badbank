import React from 'react';
import Card from "./Card";
import UserContext from './UserContext';

function Deposit(){
    const ctx = React.useContext(UserContext);
    const [deposit, setDeposit] = React.useState(''); 
    const [status, setStatus]     = React.useState('');
    const user = ctx.users[0];
  
    function handleDeposit(){
      //console.log(deposit);
      const submitElement = document.getElementById("deposit-button");
      if(submitElement.disabled === true) return;

      //check that the deposit value is a number!
      if (isNaN(parseInt(deposit))){
        setStatus('Error: Deposit must be a number');
        setTimeout(() => setStatus(''),4000);
        return;
      }
  
      //check that the deposit value is a positive number!
      if (parseInt(deposit) <= 0){
        setStatus('Error: Deposit must be a positive number');
        setTimeout(() => setStatus(''),4000);
        return;
      }
  
      var total = parseInt(user.balance) + parseInt(deposit);
      //console.log(total);
      ctx.users[0].balance = total;
      alert('Successful Deposit!');
      setDeposit('');
    }  
  
    function handleBlur(event){
      //console.log('hi');
      const submitElement = document.getElementById("deposit-button");
   
      if((submitElement != null) && (!deposit) ){
        submitElement.disabled = true;
      }
      else if (submitElement != null){
        submitElement.removeAttribute("disabled");
      }
      
    }
  
    return (
      <>
      <h1> Deposit</h1>
      <br/>
      <Card
          bgcolor="success"
          status={status}
          body={  
                  <>
                  <div className="row">
                    <div className="col">
                    Balance
                    </div>
                    <div className="col">
                    ${user.balance}
                    </div>
                  </div>
                 <br/>
                  Deposit Amount<br/>
                  <input type="input" className="form-control" id="deposit" placeholder="Deposit Amount" value={deposit} onChange={e => setDeposit(e.currentTarget.value)} onBlur={e => handleBlur(e)}/><br/>
                  <div onClick={handleDeposit}><button type="submit" id="deposit-button" className="btn btn-light" disabled>Deposit</button></div>
                  <br/>
  
  
                  </>
               }
        />
        </>
    )
  }
  
  export default Deposit;
