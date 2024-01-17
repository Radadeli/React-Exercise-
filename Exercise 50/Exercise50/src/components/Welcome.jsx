import Age from './Age'
import { Link } from 'react-router-dom';
export function Welcome({ name, age }) {
  return (
    <div className='welcome'>
    <p>Welcome, <strong>{name}</strong> </p>
    {age > 18 && <Age age = {age} />}
    {Boolean (age) && <Age age = {age} />}
    {age > 18 && age < 65 && <Age age = {age} />}
    <Age age = {age} />
    {age > 18 && age < 65 && name === 'Jhon' && <Age age = {age} />}

    <h2>Welcome, {name ? name : 'Stranger'}!</h2>
    <Link to="/Welcome">Welcome Exercise</Link>
    </div>
    
  );
  }

export default Welcome; 
