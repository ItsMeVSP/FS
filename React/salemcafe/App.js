import React,{useState} from 'react';
import './App.css';

const App=()=>{
  const [muffins,setmuffins]=useState(10);
  const [cookies,setcookies]=useState(15);
  const [totalsold,settotalsold]=useState(0);
  const muffin=()=>{
    if(muffins>0){
      setmuffins(muffins-1);
      settotalsold(totalsold+1);
    }
    else{
      alert("Muffins sold out.")
    }
  };
  const cookie=()=>{
    if(cookies>0){
      setcookies(cookies-1);
      settotalsold(totalsold+1);
    }
    else{
      alert("Cookies sold out.")
    }
  };
  return(
    <div className='App'>
        <h1>Salem Cafe</h1>
        <center>
        <table id='tb'>
          <tr>
            <td>Items:</td>
            <td>Available</td>
            <td>Buy</td>
          </tr>
          <tr>
            <td>Blueberry Muffins</td>
            <td>{muffins}</td>
            <td><button className="muffins" onClick={muffin}>Buy</button></td>
          </tr>
          <tr>
            <td>Chocalate Chip Cookies</td>
            <td>{cookies}</td>
            <td><button className="cookies" onClick={cookie}>Buy</button></td>
          </tr>
        </table>
        </center>
        <p id='result'>Total items sold:{totalsold}</p>
    </div>
  );
};

export default App;
