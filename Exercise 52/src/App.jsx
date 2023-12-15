
import Message from "./Message";
// import { Hello } from "./Hello";
import { createRoot } from 'react-dom';

const root = createRoot(document.getElementById("root"));

export function App() {
  return (
    <div>
      {/* <Hello /> 
      <Hello />  */}
      <Message />
    </div>
  );
}

root.render(<App />);

