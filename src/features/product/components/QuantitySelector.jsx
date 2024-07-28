import { useState } from "react";
import { DecreaseSymbol, IncreaseSymbol } from "../../../components/Symbol";

export default function QuantitySelector({
  value,
  onChange,
  minValue = 0,
  maxValue = 100,
}) {
  const handleClickIncrease = () => {
    if (value < maxValue) {
      onChange(value + 1);
    }
  };

  const handleClickDecrease = () => {
    if (value > minValue) {
      onChange(value - 1);
    }
  };
  return (
    <div className="flex items-center w-fit rounded-xl border-2 border-gray-500 overflow-hidden justify-center hover:border-2 hover:border-blue-500">
      <button
        type="button"
        onClick={handleClickDecrease}
        className="w-[50px] h-[50px] text-3xl text-vallartaBlue font-semibold cursor-pointer flex justify-center items-center"
      >
        <DecreaseSymbol />
      </button>
      <p className="w-[50px] h-[30px] flex justify-center items-center text-lg font-semibold border-x-2 text-blue-500">
        {value}
      </p>
      <button
        type="button"
        onClick={handleClickIncrease}
        className="w-[50px] h-[50px] text-3xl text-vallartaBlue font-semibold cursor-pointer flex justify-center items-center"
      >
        <IncreaseSymbol />
      </button>
    </div>
  );
}
