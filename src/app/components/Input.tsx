import React from "react";

function Input() {
  return (
    <div className="flex flex-col mt-2 w-full">
      <label className="text-sm">label</label>
      <input
        type="text"
        className="border border-themeColor px-4 py-1 rounded-md"
      />
    </div>
  );
}

export default Input;
