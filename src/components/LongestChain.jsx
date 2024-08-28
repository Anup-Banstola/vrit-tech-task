import { useState } from "react";
import { longestConsecutiveSequence } from "../utils/longestConsecutiveSequence";

const LongestChain = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const arr = input.split(",").map(Number);
    setResult(longestConsecutiveSequence(arr));
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter numbers separated by commas"
          className="border p-2 w-full rounded"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 w-full rounded mt-4"
        >
          Find Longest Chain
        </button>
      </form>
      {result !== null && (
        <p className="mt-4 text-center">
          Longest Chain Length: <strong>{result}</strong>
        </p>
      )}
    </div>
  );
};

export default LongestChain;
