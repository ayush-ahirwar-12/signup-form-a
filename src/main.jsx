import { createRoot } from 'react-dom/client'
import "./Index.css"
  import { ToastContainer, toast } from 'react-toastify';
import App from './App.jsx';
    


createRoot(document.getElementById('roo')).render(
    <>
    <App  />
          <ToastContainer />
          </>

)
