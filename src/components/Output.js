import React from "react";

// Output component
function Output({ bill, tips, billAfterTips, onReset }) {
  return (
    <div className="body-output">
      {/* Menampilkan output dari proses perhitungan */}
      <div className="output">
        <h3>
          You pay ${billAfterTips === 0 ? "0" : `${billAfterTips}`} (${bill} + $
          {tips} Tip)
        </h3>
      </div>
      {/* Tombol untuk reset data inputan */}
      <div className="reset" onClick={onReset}>
        <button className="btn-reset">Reset</button>
      </div>
    </div>
  );
}

export default Output;
