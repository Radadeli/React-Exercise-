import Hello from './Hello';
import Message from './Message'

const App = () => {
    return (
        <div>
        <div> <Hello /> </div>
        <div> <Hello /> </div>
        <div> <Hello /> </div>
        <div> <Message /> </div>
        </div>
    )

}

// Se puede utilizar el componente 'Hello' más de una vez sin tener problemas. 
// El componente Message se puede renderizar sin problemas 
export default App; 