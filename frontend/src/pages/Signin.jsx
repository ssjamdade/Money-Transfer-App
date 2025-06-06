import React, { useState, useEffect } from 'react'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import BottomWarning from '../components/BottomWarning'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const Signin = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loader, setLoader] = useState(false)

  const navigate = useNavigate()

  const apiUrl = import.meta.env.VITE_API_URL

  useEffect(() => {
    document.body.style.backgroundColor = "#cad5e2"

    return () => {
      document.body.style.backgroundColor = ""
    }
  }, [])

  const sendSignin = async (e) => {
    setLoader(true)
    try {
      const response = await axios.post(`${apiUrl}/api/v1/user/signin`, {
        username,
        password
      })

      localStorage.setItem("token", response.data.token)
      localStorage.setItem("username", response.data.username)
      alert(response.data.message)
      navigate("/dashboard")
    }
    catch (err) {
      if (err.response.status === 400) {
        alert("Bad request")
      } else if (err.response.status === 401) {
        alert("Invalid credentials")
      } else {
        alert("Something went wrong")
      }
    }
    finally {
      setLoader(false)
    }
  }



  return (

    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign In"} />
          <SubHeading label={"Enter your credentials to access your account"} />
          <InputBox onChange={(e) => setUsername(e.target.value)} placeholder="harkirat@gmail.com" label={"Email"} />
          <InputBox onChange={(e) => setPassword(e.target.value)} placeholder="123456" label={"Password"} />
          <div className="pt-4">
            <Button
              onClick={sendSignin}
              label={loader ? 'Signing in...' : 'Sign In'}
              disabled={loader}
            />
          </div>
          <BottomWarning label={"Don't have an account?"} buttonText={"Sign Up"} to={"/signup"} />
        </div>
      </div>
    </div>
  )
}

export default Signin
