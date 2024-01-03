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
import FocusableInput from "./FocusableInput ";
import { UseEffectComponent } from "./UseRefComponent";

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

      <div>
        <Login />
      </div>
      <hr />
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
    </div>
  );
};
// Exercise 52
// Se puede utilizar el componente 'Hello' más de una vez sin tener problemas.
// El componente Message se puede renderizar sin problemas

export default App;
