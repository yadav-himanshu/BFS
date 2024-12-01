import React, { useState } from "react";

const CalculateSalary = () => {
  const [salaryDetails, setSalaryDetails] = useState({
    baseSalary: "",
    allowances: "",
    deductions: "",
  });
  const [calculatedSalary, setCalculatedSalary] = useState(null);

  const handleCalculate = () => {
    const { baseSalary, allowances, deductions } = salaryDetails;
    if (baseSalary) {
      const netSalary =
        parseFloat(baseSalary) +
        parseFloat(allowances || 0) -
        parseFloat(deductions || 0);
      setCalculatedSalary(netSalary);
    } else {
      alert("Base salary is required!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg p-8 rounded-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">
          Salary Calculator
        </h2>
        <input
          type="number"
          placeholder="Base Salary"
          value={salaryDetails.baseSalary}
          onChange={(e) =>
            setSalaryDetails({
              ...salaryDetails,
              baseSalary: e.target.value,
            })
          }
          className="block w-full p-2 mb-4 border border-gray-300 rounded-md"
        />
        <input
          type="number"
          placeholder="Allowances (Optional)"
          value={salaryDetails.allowances}
          onChange={(e) =>
            setSalaryDetails({
              ...salaryDetails,
              allowances: e.target.value,
            })
          }
          className="block w-full p-2 mb-4 border border-gray-300 rounded-md"
        />
        <input
          type="number"
          placeholder="Deductions (Optional)"
          value={salaryDetails.deductions}
          onChange={(e) =>
            setSalaryDetails({
              ...salaryDetails,
              deductions: e.target.value,
            })
          }
          className="block w-full p-2 mb-4 border border-gray-300 rounded-md"
        />
        <button
          onClick={handleCalculate}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 w-full"
        >
          Calculate
        </button>
        {calculatedSalary !== null && (
          <p className="mt-4 text-center font-bold text-gray-700">
            Net Salary: ₹{calculatedSalary.toFixed(2)}
          </p>
        )}
      </div>
    </div>
  );
};

export default CalculateSalary;
