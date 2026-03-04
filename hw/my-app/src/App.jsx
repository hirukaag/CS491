import { useState } from "react";
import House from "./House";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>My Counter</div>

      <button onClick={() => setCount((count) => count - 1)}>-</button>

      {count}

      <button onClick={() => setCount((count) => count + 1)}>+</button>

      <hr />

      <House name="paradise" />
    </div>
  );
};

export default App;