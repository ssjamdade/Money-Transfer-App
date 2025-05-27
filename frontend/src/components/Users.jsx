import React from 'react'
import InputBox from './InputBox'
import UsersList from './UsersList'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Users = () => {

  const [users, setUsers] = useState([])
  const [filter, setFilter] = useState("")

  useEffect(() => {
    axios.get("http://localhost:3000/api/v1/user/bulk?filter=" + filter).then(res => setUsers(res.data.users!=undefined ? res.data.users : []))
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
