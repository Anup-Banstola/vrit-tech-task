import "./App.css";
import LongestChain from "./components/LongestChain";
import SearchFilter from "./components/SearchFilter";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="mb-8">
        <h1 className="text-xl font-bold text-center mb-4">Search Filter</h1>
        <SearchFilter />
      </div>
      <div>
        <h1 className="text-xl font-bold text-center mb-4">User List</h1>
        <UserList />
      </div>
      <div>
        <h1 className="text-xl font-bold text-center mb-4">
          Longest Chain of Consecutive Numbers
        </h1>
        <LongestChain />
      </div>
    </div>
  );
}

export default App;
