const ConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <div 
            id="confirmation-modal-overlay" 
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-[2px]  flex items-center justify-center z-[2000] transition-opacity duration-300 ease-out visible opacity-100"
        >
            <div 
                id="confirmation-modal"
                onClick={(e) => e.stopPropagation()}
                className="bg-slate-800 border border-slate-700 rounded-2xl p-6 sm:p-8 shadow-xl w-full max-w-md mx-4 transform scale-100 transition-all duration-300 ease-out relative"
            >
                <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <h3 className="text-2xl font-bold text-white mb-3">
                    Clear Chat History
                </h3>
                <p className="text-slate-300 mb-8">
                    Are you sure you want to clear the entire chat history? This action cannot be undone.
                </p>
                <div className="flex justify-end gap-4">
                    <button onClick={onClose} className="px-6 py-2 rounded-lg bg-slate-600 hover:bg-slate-500 text-white font-semibold transition-colors">
                        Cancel
                    </button>
                    <button onClick={onConfirm} className="px-6 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white font-semibold transition-colors">
                        Yes, Clear
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;