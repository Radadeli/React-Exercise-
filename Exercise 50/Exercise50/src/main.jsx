import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom'
import App from './components/App.jsx'
import { SWRConfig } from 'swr';

const fetcher = url => fetch(url).then(response => response.json())

ReactDOM.createRoot(document.getElementById('root')).render(

  <SWRConfig value={{ fetcher }}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </SWRConfig>

);
