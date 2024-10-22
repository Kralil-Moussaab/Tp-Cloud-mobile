import { useState } from "react";

const colors = [
  "text-red-500",
  "text-blue-500",
  "text-green-500",
  "text-yellow-500",
];

function Tp1() {
  const [colorIndex, setColorIndex] = useState(0);

  const handleColorChange = () => {
    setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  return (
    <div className="flex flex-col items-center justify-center py-[17rem] bg-gray-100">
      <h1 className={`text-4xl font-bold ${colors[colorIndex]} mb-6`}>
        Change my color!
      </h1>
      <button
        onClick={handleColorChange}
        className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
      >
        Change Color
      </button>
    </div>
  );
}

export default Tp1;
