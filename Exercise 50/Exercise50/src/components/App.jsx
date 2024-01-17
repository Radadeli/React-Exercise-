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
import Container from "./Container";
import { LanguageContext } from "./LanguageContext";
import { useState } from "react";
import { GitHubUsers } from "./GitHubUsers";
import { CounterHook } from "./CounterHook";
import { Routes, Route } from "react-router-dom";


const App = () => {
  const [language, setLanguage] = useState("en");
  function handleSetLanguage(language) {
    setLanguage(language);
  }
  return (
    
    <Routes>
    
      <button style={{ width: "30px" }} onClick={() => handleSetLanguage("en")}>
        ES
      </button>
      <button onClick={() => handleSetLanguage("es")}>EN</button>
      <Container title={<h1>The best application</h1>}>
        <LanguageContext.Provider value={language}>
         
          <Clock />
        </LanguageContext.Provider>
        
   
          <Hello />
         
          <Hello />
  
        
          <Hello />
          <br />
               
          <Message />
  
        <br />
        
  
        <Route path="/Welcome" element={<Welcome/>} />
     
        
        <AlertClock/> 
        
        <br />
        
          <Counter />
        
        <br />
        
          <MouseClicker />
    
        <br />

        
          <InteractiveWelcome />
      
        <br />
        
          <Login />
        
        <hr />
        <br />
        
          <UnControlledLogin />
        
        <br />

        
          <FocusableInput />
        
        
          <UseEffectComponent />
        
        
          <Colors />
        
        
          <ToDoList />
        
        
      </Container>
      <br />
      
      <hr />
      <br />
        <GitHubUsers/>
        <hr />
      
      <CounterHook/>
      <hr />
      <br />
     
      
      </Routes>
  );
};
// Exercise 52
// Se puede utilizar el componente 'Hello' más de una vez sin tener problemas.
// El componente Message se puede renderizar sin problemas

export default App;
