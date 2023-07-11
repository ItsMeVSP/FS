import React, { useState } from 'react';
import "./App.css";

const DownPaymentCalculator = () => {
  const [annualSalary, setAnnualSalary] = useState('');
  const [portionSaved, setPortionSaved] = useState('');
  const [totalCost, setTotalCost] = useState('');
  const [monthsToSave, setMonthsToSave] = useState(null);

  const calculateMonthsToSave = (e) => {
    e.preventDefault();

    const monthlySalary = parseFloat(annualSalary) / 12;
    const monthlySavings = monthlySalary * parseFloat(portionSaved);
    const downPayment = parseFloat(totalCost) * 0.25;

    let months = 0;
    let currentSavings = 0;

    while (currentSavings < downPayment) {
      currentSavings += monthlySavings;
      currentSavings *= 1.04; 
      months++;
    }

    setMonthsToSave(months);
  };

  return (
    <div id='inter'>
      <h2>Down Payment Calculator</h2>
      <form onSubmit={calculateMonthsToSave} id='frm'>
        <div>
          <label htmlFor="annualSalary">Annual Salary:</label>
          <input
            type="number"
            id="annualSalary"
            value={annualSalary}
            onChange={(e) => setAnnualSalary(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="portionSaved">Portion Saved:</label>
          <input
            type="number"
            id="portionSaved"
            value={portionSaved}
            onChange={(e) => setPortionSaved(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="totalCost">Total Cost of Home:</label>
          <input
            type="number"
            id="totalCost"
            value={totalCost}
            onChange={(e) => setTotalCost(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Calculate</button>
        </div>
      </form>
      {monthsToSave !== null && (
        <p>Number of Months to Save: {monthsToSave}</p>
      )}
    </div>
  );
};

export default DownPaymentCalculator;
