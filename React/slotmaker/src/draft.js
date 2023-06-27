//import logo from './logo.svg';
import './App.css';
// import {useState} from 'react';
// import LoginStu from './login_student';
function App() {
  // const[loginPage,setLoginPage]=useState(false);
  // setLoginPage=()=>{
  //   console.log("Adipurush Blockbuster");
  // }
  return (
    <div className="App">
      <div className='butty'>
        {/* <button className='btn btn-success'onClick={setLoginPage}>Student</button>
        <button className='btn btn-success'onClick={setLoginPage}>Faculty</button> */}
        <button className='btn btn-success'>Student</button>
        <button className='btn btn-success'>Faculty</button>
      </div>
    </div>
  );
}
export default App;
