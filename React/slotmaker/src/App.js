import React, { useState } from 'react';
import logo from './mylogo.jpg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
document.title = "Book Your Slot @ Slotmaker"
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [facultyIn, setFacultyIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [slots, setSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState('');
  const [names, setNames] = useState(['', '', '']);
  const [slot1,setSlot1] = useState(8);
  const [slot2,setSlot2] = useState(4);
  const [slot3,setSlot3] = useState(12);
  const [slot4,setSlot4] = useState(8);
  const [teamno,setTeamNo] = useState(1);

  const handleStudentLogin = () => {
    if (username === 'student' && password === '1234') {
      setLoggedIn(true);
    } 
    else if(username === 'vijay' && password === 'abcd'){
      setLoggedIn(true);
    }
    else {
      alert('Invalid credentials');
    }
  };

  const facultyLogin = () =>{
    if (username === 'baala' && password === '1234') {
      setFacultyIn(true);
    }
    else{
      alert('Invalid credentials');
    }
  }

  const handleSlotBooking = () => {
    
    const newSlot = {
      team : teamno,
      slot: selectedSlot,
      names: names.filter(name => name !== ''),
    };
    function slotsDetails(){
      setSlots(prevSlots => [...prevSlots, newSlot]);
      setSelectedSlot('');
      setNames(['', '', '']);
    }
    
    if(selectedSlot==="Slot-1 Monday 10:00am - 12:00Noon"){
      if(slot1 === 0){
        alert('slot1 is full book anyother available slot');
        return;
      }else{
        setSlot1(slot1-1);
        setTeamNo(teamno + 1);
        slotsDetails();
        alert('Booked successfully');
        handleLogout();
        
      }
      
    }
    else if(selectedSlot==="Slot-2 Wednesday 04:00pm - 05:00pm"){
      if(slot2 === 0){
        alert('slot2 is full book anyother available slot') 
        return
      }else{
        setSlot2(slot2-1);
        setTeamNo(teamno + 1);
        slotsDetails();
        alert('Booked successfully');
        handleLogout();
        
      }
    }
    else if(selectedSlot==="Slot-3 Thursday 08:30am - 11:30am"){
      if(slot3 === 0){
        alert('slot3 is full book anyother available slot')
        return
      }else{
        setSlot3(slot3-1);
        setTeamNo(teamno + 1);
        slotsDetails();
        alert('Booked successfully');
        handleLogout();
        
      }
      
    }
    else if(selectedSlot==="Slot-4 Friday 05:00pm - 07:00pm"){
      if(slot4 === 0){
        alert('slot4 is full book anyother available slot')
        return
      }else{
        setSlot4(slot4-1);
        setTeamNo(teamno + 1);
        slotsDetails();
        alert('Booked successfully');
        handleLogout();
      }

    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
    setPassword('');
    
  };
  const facultyLogout = () => {
    setFacultyIn(false);
    setUsername('');
    setPassword('');
  }

  if (loggedIn) {
    return (
      <div className="App">
        <h3 id = 'h3tag'>Book Your Slot</h3>
        <select value={selectedSlot} className = 'selectVal' onChange={event => setSelectedSlot(event.target.value)} id='sel'>
          <option value="" disabled>Select a slot</option>
          <option value="Slot-1 Monday 10:00am - 12:00Noon">Slot-1 Monday 10am- 12pm(Available:{slot1})</option>
          <option value="Slot-2 Wednesday 04:00pm - 05:00pm">Slot-2 Wednesday 4pm - 5pm(Available:{slot2})</option>
          <option value="Slot-3 Thursday 08:30am - 11:30am">Slot-3 Thursday 8am - 10am(Available:{slot3})</option>
          <option value="Slot-4 Friday 05:00pm - 07:00pm">Slot-4 Friday 5pm - 7pm(Available:{slot4})</option>
        </select>
        <br />
        <br />
        <input type="text" value={names[0]} className='name1' onChange={event => setNames([event.target.value, names[1], names[2]])}  placeholder="Enter Team member 1"/><br/>
        <input type="text" value={names[1]} className='name2' onChange={event => setNames([names[0], event.target.value, names[2]])}
          placeholder="Enter Team member 2"/><br/>
        <input type="text" value={names[2]} className='name3' onChange={event => setNames([names[0], names[1], event.target.value])}
          placeholder="Enter Team member 3"/>
        <br />
        <br />
        <button type="button" onClick={handleSlotBooking} className="btn btn-primary"> Book </button>&nbsp;
        <button type="button" onClick={handleLogout} className="btn btn-danger">Log Out </button>                 
      </div>
    );
  }else if(facultyIn){
    return(
      <div className='App'>
        <button type="button" id='facLog' onClick={facultyLogout} className="btn btn-danger btn-lg"> Log Out</button>
        <h4 className='viewslot'>Booked Slots</h4>
        {/* <ul>
          {slots.map((slot, index) => (
            <li key={index}>
              (Team: {slot.team}) {slot.slot}: (Candidates:{slot.names.join(', ')})
            </li>
          ))}
        </ul> */}
        <table class="table table-dark" id='tb1'>
            <thead>
                <tr>
                    <th scope="col">Team</th>
                    <th scope='col'>Slot</th>
                    <th scope="col">Candidates</th>
                </tr>
            </thead>
            <tbody>
                {slots.map((slot, index) => (
            <tr key={index}>
              <td>{slot.team}</td><td>{slot.slot}</td><td>{slot.names.join(', ')}</td>
            </tr>
          ))}
            </tbody>
        </table>
      </div>

    );
  }
  
  
  else {
    return (
     <div className='bg' background="black">
        <div className="App">
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            </header>
            <h3 id='slotitle'>Slot Maker</h3>
            <input type="text" className='usrname' value={username} onChange={event => setUsername(event.target.value)} placeholder="Username"/><br/>
            <input type="password" className='pwd' value={password} onChange={event => setPassword(event.target.value)}
            placeholder="Password"/>
            <br />
            <br />
            <button type="button" onClick={handleStudentLogin} className="btn btn-primary">
            Login as Student
            </button>&nbsp;
            <button type="button" onClick={facultyLogin} className="btn btn-success">
            Login as Faculty
            </button>
        </div>
      </div>
    );
  }
}

export default App;
