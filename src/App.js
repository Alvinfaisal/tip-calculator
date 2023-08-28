import React from "react";

function App() {
  return (
    <div className="container">
      <div className="body-tip-calculator">
        <div className="title">
          <h2>💵 Tip calculator 🤑</h2>
        </div>
        <div className="body-input">
          <div className="input-bil">
            <label>How much was the bill?</label>
            <input type="number" placeholder="0" />
          </div>
          <div className="input-percentage-service1">
            <label>How did you like the service?</label>
            <select>
              <option>Dissatified (0%)</option>
              <option>It was okay (5%)</option>
              <option>It was good (10%)</option>
              <option>Absolutely amazing! (20%)</option>
            </select>
          </div>
          <div className="input-percentage-service2">
            <label>How did your friend like the service?</label>
            <select>
              <option>Dissatified (0%)</option>
              <option>It was okay (5%)</option>
              <option>It was good (10%)</option>
              <option>Absolutely amazing! (20%)</option>
            </select>
          </div>
        </div>
        <div className="body-output">
          <div className="output">
            <h3>You pay $105 ($100 + $5 Tip)</h3>
          </div>
          <div className="reset">
            <button className="btn-reset">Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
