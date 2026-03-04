import { useState } from "react";
import Input from "./components/Input";
import List from "./components/List";
import "./App.css";

const App = () => {
  const [items, setItems] = useState([]);

  const addItem = (text) => {
    setItems([...items, text]);
  };

  return (
    <div>
      <h1>Grocery Shopping List</h1>

      <Input addItem={addItem} />

      <List items={items} />
    </div>
  );
};

export default App;