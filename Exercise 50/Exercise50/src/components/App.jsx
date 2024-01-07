import Hello from "./Hello";
import Message from "./Message";
import Welcome from "./Welcome";
import AlertClock from "./AlertClock";
import Counter from "./Counter";
import Clock from "./Clock";
import { MouseClicker } from "./MouseClicker";
import InteractiveWelcome from "./InteractiveWelcome";
import { Login } from "./Login";
import { UnControlledLogin } from "./UncontrolledLogin";
import FocusableInput from "./FocusableInput";
import { UseEffectComponent } from "./UseRefComponent";
import { Colors } from "./Colors";
import ToDoList from "./ToDoList";

const App = () => {
  return (
    <div>
      <div>
        {" "}
        <Hello />{" "}
      </div>
      <div>
        {" "}
        <Hello />{" "}
      </div>
      <div>
        {" "}
        <Hello />{" "}
      </div>
      <div>
        {" "}
        <Message />{" "}
      </div>
      <div>
        {" "}
        <Welcome name="Ramiro" age={25} />{" "}
      </div>
      <div>
        <AlertClock />
      </div>

      <Counter />
      <Clock />

      <MouseClicker />
<hr />
      <div>
        <InteractiveWelcome />
      </div>
<br />
      <div>
        
        <Login />
      </div>
      <hr />
      <br />
      <div>
        <UnControlledLogin/>
      </div>
      <br />
      <div>
    <FocusableInput />
      </div>
      <div>
      <UseEffectComponent />
      </div>
      <div>
        <Colors />
      </div>
      <div>
        <ToDoList />
      </div>
    </div>
  );
};
// Exercise 52
// Se puede utilizar el componente 'Hello' más de una vez sin tener problemas.
// El componente Message se puede renderizar sin problemas

export default App;
