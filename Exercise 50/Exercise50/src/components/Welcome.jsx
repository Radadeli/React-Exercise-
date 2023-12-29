import Age from './Age'
export function Welcome({ name, age }) {
  return (
    <div>
    <p>Welcome, <strong>{name}</strong> </p>
    {age > 18 && <Age age = {age} />}
    {Boolean (age) && <Age age = {age} />}
    {age > 18 && age < 65 && <Age age = {age} />}
    <Age age = {age} />
    {age > 18 && age < 65 && name === 'Jhon' && <Age age = {age} />}

    <h2>Welcome, {name ? name : 'Stranger'}!</h2>
    </div>
    
  );
  }

export default Welcome; 
