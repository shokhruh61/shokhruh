import React from "react";
import useModalStore from "../store/useModalStore";

function Modal() {
  const { isModalOpen, openModal, closeModal } = useModalStore();

  return (
    <div className="min-h-screen flex-col flex items-center justify-center">
      <h1 className="text-center mb-4 text-5xl font-serif font-extrabold">Modal Window</h1>
      <button
        onClick={openModal}
        className="bg-blue-500 text-white px-6 py-2 rounded-md cursor-pointer">Open Modal
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center gap-4 w-[500px]">
            <h2 className="text-2xl font-serif font-bold">Modal Window</h2>
            <p className="font-medium font-serif">You have opened the modal window, you can now close it!</p>
            <button
              onClick={closeModal}
              className="bg-red-500 text-white p-4 py-2 rounded-md cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
