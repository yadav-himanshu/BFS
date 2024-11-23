import React, { useState } from 'react'
import ClientData from './ClientData';
import EmployeeData from './EmployeeData';

const Modal = () => {

    const [clientModalOpen, setClientModalOpen] = useState(false);
    const [employeeModalOpen, setEmployeeModalOpen] = useState(false);
  
    const openClientModal = () => setClientModalOpen(true);
    const closeClientModal = () => setClientModalOpen(false);
  
    const openEmployeeModal = () => setEmployeeModalOpen(true);
    const closeEmployeeModal = () => setEmployeeModalOpen(false);

  return (
    <div>

<div className="flex gap-3 whitespace-nowrap flex-wrap">
            {/* Request a Service Button */}
            <button
              onClick={openClientModal}
              className="bg-blue-500 text-white flex-1 px-6 py-2 rounded-md text-sm font-semibold shadow-md hover:bg-blue-700 transition duration-300"
            >
              Request a Service
            </button>

            {/* Looking for Work Button */}
            <button
              onClick={openEmployeeModal}
              className="bg-yellow-600 text-white flex-1 px-6 py-2 rounded-md text-sm font-semibold shadow-md hover:bg-yellow-800 transition duration-300"
            >
              Looking for Work
            </button>
          </div>

        {clientModalOpen && (
        <div onClick={closeClientModal} className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
          <div onClick={(e) => e.stopPropagation()} className="bg-white rounded-lg p-6 w-full max-w-[500px] relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={closeClientModal}
              className="text-gray-500 absolute top-8 right-10 hover:text-red-500 text-2xl"
            >
              &times;
            </button>
            <ClientData />
          </div>
        </div>
      )}

      {/* EmployeeData Modal */}
      {employeeModalOpen && (
        <div onClick={closeEmployeeModal} className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
          <div onClick={(e) => e.stopPropagation()} className="bg-white rounded-lg p-6 w-full max-w-[500px] relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={closeEmployeeModal}
              className="text-gray-500 absolute top-8 right-10 hover:text-red-500 text-2xl"
            >
              &times;
            </button>
            <EmployeeData />
          </div>
        </div>
      )}
    </div>
  )
}

export default Modal