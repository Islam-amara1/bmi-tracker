"use client";
import { useState } from "react";

function InputField({ label, value, setValue }) {
  return (
    <div className="flex flex-col w-64">
      <label className="mb-1 text-black dark:text-white">{label}</label>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))} //

        className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-800 dark:text-white"
      />
    </div>
  );
}

export default function Home() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");

  const calculateBMI = () => {
    if (!weight || !height) return;
    const bmiValue = weight / ((height / 100) ** 2);
    setBmi(bmiValue.toFixed(1));

    if (bmiValue < 18.5) setStatus("Underweight");
    else if (bmiValue < 25) setStatus("Normal weight");
    else if (bmiValue < 30) setStatus("Overweight");
    else setStatus("Obese");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-zinc-50 dark:bg-black p-8 font-sans">
      <h1 className="text-3xl font-bold text-black dark:text-white">BMI Tracker</h1>

      <InputField label="Weight (kg)" value={weight} setValue={setWeight} />
      <InputField label="Height (cm)" value={height} setValue={setHeight} />

      <button
        onClick={calculateBMI}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Calculate BMI
      </button>

      {bmi && (
        <div className="mt-4 p-4 rounded bg-white dark:bg-zinc-800 shadow-md">
          <p className="text-xl font-semibold text-black dark:text-white">
            Your BMI: {bmi}
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">{status}</p>
        </div>
      )}
    </div>
  );
}
