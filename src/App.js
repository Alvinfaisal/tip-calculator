import React, { useState } from "react";

// import component
import Title from "./components/Title";
import Output from "./components/Output";
import InputTip from "./components/InputTip";

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
      alert("Thanks 😊");
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

export default App;
