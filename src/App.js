import Counter from "./components/Counter";
import FetchData from "./components/FetchData";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
      <FetchData url="https://jsonplaceholder.typicode.com/posts" />
    </div>
  );
}
