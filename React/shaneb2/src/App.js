import React, { useState } from 'react';
import './App.css';
const EnergyCalculator = () => {
  const [consumedUnits, setConsumedUnits] = useState('');
  const [totalCharges, setTotalCharges] = useState(0);
  const [currentCharges, setCurrentCharges] = useState(0);
  const [fixedCost, setFixedCost] = useState(50);
  const [subsidyFixedCost, setSubsidyFixedCost] = useState(0);
  const [subsidyAmount, setSubsidyAmount] = useState(250);
  const [netAmount, setNetAmount] = useState(0);

  const calculateCharges = () => {
    let units = parseFloat(consumedUnits);
    let rate = 0;

    if (units <= 100) {
      rate = 0;
    } else if (units <= 200) {
      rate = 100 + (units - 100) * 3.75;
    } else if (units <= 400) {
      rate = 250 + (units - 200) * 4;
    } else if (units <= 600) {
      rate = 300 + (units - 400) * 4.25;
    } else {
      rate = 400 + (units - 600) * 5;
    }

    setTotalCharges(rate);
    setCurrentCharges(rate + fixedCost);
    setNetAmount(currentCharges - subsidyFixedCost - subsidyAmount);
  };

  return (
    <div className='App-header'>
      <h2>Energy Consumption Calculator</h2>
      <div>
        <label htmlFor="consumedUnits">Consumed Units:</label>
        <input
          type="number"
          id="consumedUnits"
          value={consumedUnits}
          onChange={(e) => setConsumedUnits(e.target.value)}
        />
      </div>
      <div>
        <button onClick={calculateCharges}>Calculate</button>
      </div>
      <div>
        <h3>Calculation Results:</h3>
        <table className='table table-dark'>
        <tbody>
        <tr><td>Consumed Units:</td><td>{consumedUnits}</td></tr>
        <tr><td>Total Current Charges Rs.</td> <td>{totalCharges}</td></tr>
        <tr><td>Current Charges Rs.</td> <td>{currentCharges}</td></tr>
        <tr><td>Fixed Cost Rs.(+)</td><td> {fixedCost}</td></tr>
        <tr><td>Subsidy Fixed Cost Rs.(-)</td><td> {subsidyFixedCost}</td></tr>
        <tr><td>New Subsidy Rs.(-) </td><td>{subsidyAmount}</td></tr>
        <tr><td>Net Amount Rs.</td><td> {netAmount}</td></tr>
        </tbody>
        </table>
      </div>
    </div>
  );
};

export default EnergyCalculator;
