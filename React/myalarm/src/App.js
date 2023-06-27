import React, { useState, useEffect } from 'react';
import './App.css';

const AlarmClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  const [alarmTime, setAlarmTime] = useState('');
  const [isAlarmSet, setIsAlarmSet] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleAlarmChange = (e) => {
    setAlarmTime(e.target.value);
  };

  const handleSetAlarm = () => {
    setIsAlarmSet(true);
  };

  const handleCancelAlarm = () => {
    setIsAlarmSet(false);
  };

  useEffect(() => {
    if (isAlarmSet) {
      const now = new Date();
      const [hours, minutes] = alarmTime.split(':');
      const alarm = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes);

      if (alarm > now) {
        const timeout = setTimeout(() => {
          alert('🤡 Joker Mavane ezhundhiri');
          setIsAlarmSet(false);
        }, alarm - now);

        return () => {
          clearTimeout(timeout);
        };
      }
    }
  }, [alarmTime, isAlarmSet]);

  return (
    <div className="alarm-clock">
      <h2 id='title'>⏰Alarm Clock⏰</h2>
      <div className="current-time">Current Time:<br/> {currentTime}</div>
      <div className="alarm-control">
        <label htmlFor="alarmTime">Set Alarm:</label>
        <input
          type="time"
          id="alarmTime"
          value={alarmTime}
          onChange={handleAlarmChange}
          className='alarmset'
        /><br/>
        {!isAlarmSet ? (
          <button onClick={handleSetAlarm}>Set Alarm</button>
        ) : (
          <button onClick={handleCancelAlarm}>Cancel Alarm</button>
        )}
      </div>
    </div>
  );
};

export default AlarmClock;
