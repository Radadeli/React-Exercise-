import Hello from './Hello';
import Message from './Message'
import Welcome from './Welcome';
const App = () => {
    return (
        <div>
        <div> <Hello /> </div>
        <div> <Hello /> </div>
        <div> <Hello /> </div>
        <div> <Message /> </div>
        <div> <Welcome name="Ramiro" age={25}/> </div>
        </div>
    )

}
// Exercise 52
// Se puede utilizar el componente 'Hello' más de una vez sin tener problemas. 
// El componente Message se puede renderizar sin problemas 
export default App; 