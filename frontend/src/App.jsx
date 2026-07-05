import { useEffect, useState } from 'react'
import axiosInstance from './utils/axiosInstance'

function App() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    axiosInstance
      .get('/health')
      .then((res) => setMessage(res.data.message))
      .catch((err) => console.error('Error:', err))
  }, [])

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Vidora</h1>
      <p>Backend says: {message}</p>
    </div>
  )
}

export default App
