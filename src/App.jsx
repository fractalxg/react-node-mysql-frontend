import { toast, ToastContainer } from 'react-toastify'
import { Form } from './components/Form'
import 'react-toastify/dist/ReactToastify.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

import './App.css'
import Grid from './components/Grid'

function App() {

  const [users, setUsers] = useState([])
  const [onEdit, setOnEdit] = useState(null)

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8000")
      setUsers(res.data)
    } catch (error) {
      toast.error(error)
    }
  }

  useEffect(() => {
    getUsers()
  }, [setUsers])

  return (
    <div>

      <div className="container">
        <h2>Usuários</h2>

        <Form />
        <Grid users={users}/>
      </div>

      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
    </div>
    
  )
}

export default App
