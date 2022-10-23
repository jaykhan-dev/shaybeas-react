import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App grid place-items-center h-screen">
      <div>
        <h1>ShayBeas - Remixed with React</h1>
      </div>
    </div>
  );
}

export default App;
