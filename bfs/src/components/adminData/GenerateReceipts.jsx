import React, { useState } from "react";

const GenerateReceipts = () => {
  const [receiptDetails, setReceiptDetails] = useState({
    customerName: "",
    amount: "",
    description: "",
  });

  const handleGenerate = () => {
    if (receiptDetails.customerName && receiptDetails.amount) {
      alert(
        `Receipt for ${receiptDetails.customerName} of ₹${receiptDetails.amount} generated successfully!`
      );
      setReceiptDetails({ customerName: "", amount: "", description: "" });
    } else {
      alert("Please fill all required fields!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg p-8 rounded-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">
          Generate Receipt
        </h2>
        <input
          type="text"
          placeholder="Customer Name"
          value={receiptDetails.customerName}
          onChange={(e) =>
            setReceiptDetails({ ...receiptDetails, customerName: e.target.value })
          }
          className="block w-full p-2 mb-4 border border-gray-300 rounded-md"
        />
        <input
          type="number"
          placeholder="Amount"
          value={receiptDetails.amount}
          onChange={(e) =>
            setReceiptDetails({ ...receiptDetails, amount: e.target.value })
          }
          className="block w-full p-2 mb-4 border border-gray-300 rounded-md"
        />
        <textarea
          placeholder="Description (Optional)"
          value={receiptDetails.description}
          onChange={(e) =>
            setReceiptDetails({
              ...receiptDetails,
              description: e.target.value,
            })
          }
          className="block w-full p-2 mb-4 border border-gray-300 rounded-md"
        ></textarea>
        <button
          onClick={handleGenerate}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 w-full"
        >
          Generate Receipt
        </button>
      </div>
    </div>
  );
};

export default GenerateReceipts;
