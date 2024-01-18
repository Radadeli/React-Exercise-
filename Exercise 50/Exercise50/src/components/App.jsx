import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { Routes, Route, Link, Router } from "react-router-dom";

const App = () => {
  return (
    <div>
      <nav>
        <Link to="/Welcome"> Welcome Exercise</Link>
        <Link to="/Counter">Counter Exercise</Link>
      </nav>
      
      <Routes>
        <Route path="/Welcome" element={<Welcome name={"Ramiro"} age={28} />} />
       
        <Route path="/Counter" element={<Counter />} />
      </Routes>
      
    </div>
  );
};

export default App;

// Exercise 52
// Se puede utilizar el componente 'Hello' más de una vez sin tener problemas.
// El componente Message se puede renderizar sin problemas


{
  /* <nav>
      <Link to="/">Home page</Link> | <Link to="/counter">Counter</Link>
      <hr />
    </nav>
      <Routes>
        <Route path="/" element={<Welcome name="Ramiro" />} />
        <Route path="/counter" element={<Counter initialValue={0} difAmount={5} />}/>
      </Routes> */
}
