
import { createRoot } from 'react-dom/client';
import App from './App';
import Hello from './Hello';

const root = createRoot(document.getElementById('root'));
root.render(<Hello />);
root.render(<App />);
