import { useEffect, useState } from 'react'
import AppBar from '../components/AppBar'
import Balance from '../components/Balance'
import Users from '../components/Users'
import axios from 'axios'

const Dashboard = () => {
  const [data, setData] = useState({})

  useEffect(() => {

    const fetchData = async () => {

      const res = await axios.get("http://localhost:3000/api/v1/account/balance", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
      setData(res.data)
    }
    fetchData()
  }, [])


  return (
    <div>
      <AppBar user={localStorage.getItem("username")} />
      <div className='flex flex-col h-screen p-6 font-bold'>
        <Balance balance={data.balance} />
        <Users />
      </div>
    </div>
  )
}

export default Dashboard
