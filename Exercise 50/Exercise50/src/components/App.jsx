import Hello from "./Hello";
import Message from "./Message";
import Welcome from "./Welcome";
import AlertClock from "./AlertClock";
import Counter from "./Counter";
import Clock from "./Clock";
import { MouseClicker } from "./MouseClicker";
import InteractiveWelcome from "./InteractiveWelcome";
import { Login } from "./Login";
import { UnControlledLogin } from "./UnControlledLogin";
import FocusableInput from "./FocusableInput";
import { UseEffectComponent } from "./UseRefComponent";
import { Colors } from "./Colors";
import ToDoList from "./ToDoList";
import Container from "./Container"
import { LanguageContext } from "./LanguageContext";
import { useState } from "react";

const App  = () => {
  const [language, setLanguage] = useState('en')
  function handleSetLanguage(language){
    setLanguage(language)
  }
  return (
    <div>
      <button style={{width:'30px'}} onClick={() => handleSetLanguage('en')}>ES</button>
      <button onClick={() => handleSetLanguage('es')}>EN</button>
    <Container title={<h1>The best application</h1>} >
      <LanguageContext.Provider value={language}>
      <Clock />
      </LanguageContext.Provider>
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
    </Container>
    </div>
  );
};
// Exercise 52
// Se puede utilizar el componente 'Hello' más de una vez sin tener problemas.
// El componente Message se puede renderizar sin problemas

export default App;
