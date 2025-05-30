import React from 'react'
import InputBox from './InputBox'
import UsersList from './UsersList'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Users = () => {
  
  const [users, setUsers] = useState([])
  const [filter, setFilter] = useState("")
  const loginUsername = localStorage.getItem("username")
  
  const apiUrl = import.meta.env.VITE_API_URL
  useEffect(() => {

    async function fetchUsers() {
      try {
        const res = await axios.get(`${apiUrl}/api/v1/user/bulk?filter=${filter}`)
        const filteredUsers = res.data.users
          ? res.data.users.filter(user => user.username !== loginUsername)
          : []
        setUsers(filteredUsers)
      } catch (error) {
        console.error("Error fetching users:", error)
        setUsers([]) // Optional: clear on error
      }
    }

    fetchUsers();
    
  }, [filter])

  return (
    <div>

      <InputBox onChange={(e) => setFilter(e.target.value)} label={"Users"} placeholder={"Search users..."} />
      {users.length > 0 ? (
        users.map((user) => {
          return (
            <UsersList key={user._id} user={user} />
          )
        })
      ) : (
        <div className='flex justify-center items-center h-screen'>
          <h1 className='text-2xl font-bold'>No users found</h1>
        </div>
      )}
    </div>
  )
}

export default Users
