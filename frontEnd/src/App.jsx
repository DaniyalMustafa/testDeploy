import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [employees, setemployees] = useState([])

  useEffect(() => {
    axios.get('/api/group')
    .then((response) => {
      setemployees(response.data)
    })
    .catch((error) => {
      console.log(error)
  })
})

  return (
    <>
     <h1>React app</h1>
     <p>People in company: {employees.length}</p>
     {
        employees.map((employee, index) => (
          <div key={employee.id}>
            <h3>{employee.title}</h3>
          </div>
        ))
    }
    </>
  )
}

export default App
