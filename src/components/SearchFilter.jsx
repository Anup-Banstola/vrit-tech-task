import { useState } from "react";

const SearchFilter = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const items = ["Apple", "Banana", "Orange", "Mango", "Grapes"];

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4 mx-auto">
      <input
        type="text"
        placeholder="Search for fruit..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="border p-2 w-full rounded"
      />
      <ul className="mt-4">
        {filteredItems.map((item, index) => (
          <li key={index} className="border-b-2">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFilter;
