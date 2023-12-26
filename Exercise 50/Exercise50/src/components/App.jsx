import Hello from './Hello';
import Message from './Message'
import Welcome from './Welcome';
import  AlertClock  from './AlertClock';
import Counter from './Counter';


const App = () => {
    return (
        <div>
        <div> <Hello /> </div>
        <div> <Hello /> </div>
        <div> <Hello /> </div>
        <div> <Message /> </div>
        <div> <Welcome name="Ramiro" age={25}/> </div>
        <div><AlertClock /></div>

        <Counter/> 
       
        </div>
    )

}
// Exercise 52
// Se puede utilizar el componente 'Hello' más de una vez sin tener problemas. 
// El componente Message se puede renderizar sin problemas 

export default App; 