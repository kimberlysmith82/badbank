import React from 'react';
import UserContext from './UserContext';
import Card from './Card';

function AllData(){
  const ctx = React.useContext(UserContext);
  

    function JsonDataDisplay(){
      const DisplayData=ctx.users.map(
          (info, i)=>{
              return(
                  <tr id={i} key={i}>
                      <td>{info.name}</td>
                      <td>{info.email}</td>
                      <td>{info.password}</td>
                      <td>{info.balance}</td>
                  </tr>
              )
          }
      )
   
      return(
        <div className="row container d-flex justify-content-left">
        <div className="col-lg-8 grid-margin stretch-card">
            <div className="card">
                <div className="card-body">
                    <div className="table-responsive">
                      <table className="table">
                          <thead>
                          <tr>
                              <th>Name</th>
                              <th>Email</th>
                              <th>Password</th>
                              <th>Balance</th>
                          </tr>
                          </thead>
                          <tbody>
                              {DisplayData}
                          </tbody>
                      </table>
          </div>
          </div>
          </div>
          </div>
          </div>
      )
   }
  
  
  
  
    return (
      <>
      <h1>All Data</h1>
      <br/>
      <JsonDataDisplay/>
      <br/>
      
      </>
    );
  }
  
  export default AllData;
