import React from "react";

// import component
import InputSelect from "./reusable-component/InputSelect";

// import select data
import { selectList1, selectList2 } from "./data";

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
      >
        {/* menampilkan isi select option berasal dari array object selectList */}
        {selectList1.map((item) => (
          <option value={item.value}>{item.text}</option>
        ))}
      </InputSelect>

      <InputSelect
        value={percentage2}
        handleChange={(event) => setPercentage2(Number(event.target.value))}
        label={"How did your friend like the service?"}
      >
        {/* menampilkan isi select option berasal dari array object selectList */}
        {selectList2.map((item) => (
          <option value={item.value}>{item.text}</option>
        ))}
      </InputSelect>
    </div>
  );
}

export default InputTip;
