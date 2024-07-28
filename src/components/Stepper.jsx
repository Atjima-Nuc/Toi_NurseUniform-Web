import React from "react";
import "./stepper.css";
import { useState } from "react";

export default function Stepper({ currentStep }) {
  const steps = ["Pending", "Processing", "Finished"];
  const currentStepIndex = steps.indexOf(currentStep) + 1;

  return (
    <div className="flex justify-center">
      {steps?.map((step, i) => (
        <div
          key={i}
          className={`step-item ${currentStepIndex === i + 1 && "active"} ${
            i + 1 < currentStepIndex && "complete"
          }`}
        >
          <div className="step">{i + 1}</div>
          <p className="text-gray-800 ">{step}</p>
        </div>
      ))}
    </div>
  );
}
