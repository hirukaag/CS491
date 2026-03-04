import { useState } from "react";

const Input = ({ addItem }) => {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text !== "") {
      addItem(text);
      setText("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add item"
      />

      <button onClick={handleAdd}>+</button>
    </div>
  );
};

export default Input;