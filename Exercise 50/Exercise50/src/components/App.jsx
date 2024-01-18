import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { Routes, Route, Link } from "react-router-dom";
import { ShowGithubUser } from "./ShowGithubUser";
import styles from "./Navbar.module.scss"
import { FilteredList } from "./FilteredList";
import { AlertClock } from "./AlertClock";
import { Login } from "./Login";
import NotFound from "./NotFound";

const App = () => {
  return (
    <div>
      <nav className={styles.Navbar}>
        <Link to="/Welcome"> Welcome Exercise</Link>
        <Link to="/Counter">Counter Exercise</Link>
        <Link to="/users/:radadeli">ShowGithubUser Exercise</Link>
        <Link to="/AlertClock">AlertClock Exercise</Link>
        <Link to="/FilteredList">FilteredList Exercise</Link>
        <Link to="/Login">Login Exercise</Link>
        <Link to="/NotFound">NotFound Exercise</Link>
      </nav>
      
      <Routes>
        <Route path="/Welcome" element={<Welcome name={"Ramiro"} age={28} />} />
       
        <Route path="/Counter" element={<Counter />} />

        <Route path="/users/:radadeli" element={<ShowGithubUser />} />

        <Route path="/AlertClock" element={<AlertClock />} />
        
        <Route path="/FilteredList" element={<FilteredList />} />

        <Route path="/Login" element={<Login />} />

        <Route path="*" element={<NotFound />} />
        
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
