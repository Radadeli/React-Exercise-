import { useState } from 'react';
import Welcome from './Welcome';

const InteractiveWelcome = () => {
  const [name, setName] = useState('');

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={handleInputChange}
        placeholder="Enter your name"
      />
      <Welcome name={name} /> 
      {/* podes escribir en el browser el nombre que quieras */}
    </div>
  );
};

export default InteractiveWelcome;
