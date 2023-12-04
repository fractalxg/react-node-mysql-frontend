import { toast, ToastContainer } from 'react-toastify'
import { Form } from './components/Form'
import 'react-toastify/dist/ReactToastify.css'

import './App.css'
import Grid from './components/Grid'

function App() {

  return (
    <div>

      <div className="container">
        <h2>Usuários</h2>

        <Form />
        <Grid />
      </div>

      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
    </div>
    
  )
}

export default App
