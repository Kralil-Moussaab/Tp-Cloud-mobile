const Display = ({ currentOperand, previousOperand, operation }) => {
  return (
    <div className="bg-gray-200 text-right px-4 py-2 rounded-lg text-xl mb-4 min-h-12">
      <div className="text-md text-gray-600 ">
        {previousOperand} {operation} {currentOperand}
      </div>
    </div>
  );
};

export default Display;
