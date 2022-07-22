import React from 'react';
import Card from "./Card";
import UserContext from './UserContext';


function Withdraw(){

    const ctx = React.useContext(UserContext);
    const [withdraw, setWithdraw] = React.useState(''); 
    const [status, setStatus]     = React.useState('');
    const user = ctx.users[0];
  
    function handleWithdraw(){
      //console.log(withdraw);

      const submitElement = document.getElementById("withdraw-button");
      if(submitElement.disabled === true) return;

      
      if (isNaN(parseInt(withdraw))){
        setStatus('Error: withdraw must be a number');
        setTimeout(() => setStatus(''),4000);
        return;
      }
  
      //check that the withdraw value is less than balance!
      if (parseInt(withdraw) >= parseInt(user.balance)){
        setStatus('Error: withdraw must be less than balance');
        setTimeout(() => setStatus(''),4000);
        return;
      }
  
      var total = parseInt(user.balance) - parseInt(withdraw);
      //console.log(total);
      ctx.users[0].balance = total;
      alert('Successful Withdraw!');
      setWithdraw('');
    }  
  
    function handleBlur(event){
      //console.log('hi');
      const submitElement = document.getElementById("withdraw-button");
   
      if((submitElement != null) && (!withdraw) ){
        submitElement.disabled = true;
      }
      else if (submitElement != null){
        submitElement.removeAttribute("disabled");
      }
      
    }
  
    return (
      <>
      <h1> Withdraw</h1>
      <br/><Card
          bgcolor="danger"
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
                  Withdraw Amount<br/>
                  <input type="input" className="form-control" id="widthdraw" placeholder="Withdraw Amount" value={withdraw} onChange={e => setWithdraw(e.currentTarget.value)} onBlur={e => handleBlur(e)}/><br/>
                  <div onClick={handleWithdraw}><button id="withdraw-button" type="submit" className="btn btn-light" disabled>Withdraw</button></div>
                  </>
               }
        />
        </>
    )
  }
  export default Withdraw;
