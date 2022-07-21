import React from 'react';
import Card from "./Card";
import UserContext from './UserContext';

function CreateAccount(){
    const [show, setShow]         = React.useState(true);
    const [status, setStatus]     = React.useState('');
    const [name, setName]         = React.useState('');
    const [email, setEmail]       = React.useState('');
    const [password, setPassword] = React.useState('');
    const ctx = React.useContext(UserContext);  
   
  
    function validate(field, label){
      
        if (!field) {
          setStatus('Error: ' + label + ' is a required field.');
          setTimeout(() => setStatus(''),4000);
          return false;
        }
        return true;
    }
  
    function handleCreate(){
      //console.log(name,email,password);
      const submitElement = document.getElementById("create-account");
      if(submitElement.disabled === true) return;
  
      if (!validate(name,     'name'))     return;
      if (!validate(email,    'email'))    return;
      if (!validate(password, 'password')) return;  
      //need to check for 8 character length too
      if (password.length < 8){
        setStatus('Error: password must be at least 8 characters long');
        setTimeout(() => setStatus(''),4000);
        return;
      }
      ctx.users.push({name,email,password,balance:100});
      alert('Successfully Created Account');
      setShow(false);
    }    
    
    function handleBlur(event){
      //console.log('hi');
      const submitElement = document.getElementById("create-account");
   
      if((submitElement != null) && (!email && !name && !password)){
        submitElement.disabled = true;
      }
      else if (submitElement != null){
        submitElement.removeAttribute("disabled");
      }
      
    }
  
    function clearForm(){
      setName('');
      setEmail('');
      setPassword('');
      setShow(true);
    }
  
    return (
      <>
      <h1> Create Account</h1>
      <br/>
      <Card
        bgcolor="primary"
        status={status}
        body={show ? (  
                <>
                Name<br/>
                <input type="input" className="form-control" id="name" placeholder="Enter name" value={name}  onChange={e => setName(e.currentTarget.value)} onBlur={e => handleBlur(e)}/><br/>
                Email address<br/>
                <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)} onBlur={e => handleBlur(e)}/><br/>
                Password<br/>
                <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)} onBlur={e => handleBlur(e)}/><br/>
                <div onClick={handleCreate}><button type="submit" className="btn btn-light" id="create-account" disabled >Create Account</button>
                </div></>
              ):(
                <>
                
                <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
                </>
              )}
      />
      </>
    )
  }
  export default CreateAccount;