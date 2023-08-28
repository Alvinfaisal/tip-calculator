import React from "react";

// Membuat reusable component - versi 2 menggunakan children
function InputSelect({ value, handleChange, label, children }) {
  return (
    <div className="input-percentage-service">
      <label>{label}</label>
      <select
        //2. menggunakan state percentage1 sebagai value inputan percentage1
        value={value}
        onChange={handleChange}
      >
        {/* menambahkan props children agar membuat isi dari tag select lebih dinamis */}
        {children}
      </select>
    </div>
  );
}

export default InputSelect;
