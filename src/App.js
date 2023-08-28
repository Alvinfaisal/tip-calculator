import React, { useState } from "react";

// membuat data selectList agar select option lebih dinamis
const selectList = [
  {
    value: 0,
    text: "Dissatified (0%)",
  },
  {
    value: 5,
    text: "It was okay (5%)",
  },
  {
    value: 10,
    text: "It was good (10%)",
  },
  {
    value: 20,
    text: "Absolutely amazing! (20%)",
  },
];

// App component
function App() {
  //1. Mendeklarasikan locale state  => lifting up state from input
  const [bill, setBill] = useState(0);
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  // Menghitung berapa persen tips yang didapat
  const countTips = percentage1 + percentage2;

  // Menghitung jumlah uang tips yang yang didapat
  const tips = (bill * countTips) / 100;

  // Harga setelah ditambah tip
  const billAfterTips = bill + tips;

  // Menangani tombol reset
  function handleReset() {
    // Memunculkan pesan window confirm untuk validasi
    const konfirmasi = window.confirm("Are you sure to reset all input data?");

    // Cek kondisi jika konfirmasi bernilai true(Tekan : Yes) maka akan menjalankan fungsi reset, jika tidak/cancel(Tekan cacel) maka akan memunculkan alert.
    if (konfirmasi) {
      // jika value bill sama dengan 0, akan memunculkan pesan alert..., dan jika value bill tidak sama dengan 0, akan langsung menjalankan fungsi reset.
      if (bill === 0) {
        alert("You don't add any data😢");
      } else if (bill !== 0) {
        setBill(0);
        setPercentage1(0);
        setPercentage2(0);
      }
    } else {
      alert("Terima Kasih 😊");
    }
  }

  return (
    <div className="container">
      <div className="body-tip-calculator">
        <Title />
        <InputTip
          bill={bill}
          setBill={setBill}
          percentage1={percentage1}
          setPercentage1={setPercentage1}
          percentage2={percentage2}
          setPercentage2={setPercentage2}
        />
        <Output
          bill={bill}
          tips={tips}
          billAfterTips={billAfterTips}
          onReset={handleReset}
        />
      </div>
    </div>
  );
}

// Title component
function Title() {
  return (
    <div className="title">
      <h2>💵 Tip calculator 🤑</h2>
    </div>
  );
}

// InputTip component
function InputTip({
  bill,
  percentage1,
  percentage2,
  setBill,
  setPercentage1,
  setPercentage2,
}) {
  return (
    <div className="body-input">
      <div className="input-bil">
        <label>How much was the bill?</label>
        <input
          type="text"
          placeholder="0"
          //2. menggunakan state bill sebagai value inputan bill
          value={bill}
          onChange={(event) => setBill(Number(event.target.value))}
        />
      </div>

      {/* versi 1 */}
      <InputSelect
        value={percentage1}
        handleChange={(event) => setPercentage1(Number(event.target.value))}
        label={"How did you like the service?"}
      />

      <InputSelect
        value={percentage2}
        handleChange={(event) => setPercentage2(Number(event.target.value))}
        label={"How did your friend like the service?"}
      />
    </div>
  );
}

// Membuat reusable component - versi 1 tanpa children
function InputSelect({ value, handleChange, label }) {
  return (
    <div className="input-percentage-service">
      <label>{label}</label>
      <select
        //2. menggunakan state percentage1 sebagai value inputan percentage1
        value={value}
        onChange={handleChange}
      >
        {/* menampilkan isi select option berasal dari array object selectList */}
        {selectList.map((item) => (
          <option value={item.value}>{item.text}</option>
        ))}
      </select>
    </div>
  );
}

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

export default App;
