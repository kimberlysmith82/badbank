import React from 'react';
import UserContext from './UserContext';
import Card from './Card';
import bank from './bank.png';

function Home(){
    const ctx = React.useContext(UserContext);  
    return (
        <Card
        bgcolor="secondary"
        txtcolor="white"
        header="The BadBank"
        title="Welcome to the BadBank"
        text="For all your banking needs!"
        body={(<img src={bank} className="img-fluid" alt="Responsive image"/>)}
      />    
    );  
  }
  export default Home;