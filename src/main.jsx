import { createRoot } from 'react-dom/client'
import "./Index.css"
  import { ToastContainer, toast } from 'react-toastify';
import App from './App.jsx';
import Contextuser from './Context/Contextuser.jsx';

    


createRoot(document.getElementById('roo')).render(
    <Contextuser>
    <App  />
          <ToastContainer />
    </Contextuser>

)
