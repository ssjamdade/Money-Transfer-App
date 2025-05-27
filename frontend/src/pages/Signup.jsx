import React, { useState, useEffect } from 'react'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import BottomWarning from '../components/BottomWarning'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate()
  
  const ApiUrl = "http://localhost:3000/api/v1/user/signup"
  
  useEffect(() => {
    document.body.style.backgroundColor = "#cad5e2"

    return () => {
      document.body.style.backgroundColor = ""
    }
  }, [])

  const sendData = async (e) => {
    try {
      const response = await axios.post(ApiUrl, {
        firstName,
        lastName,
        username,
        password
      })
      console.log(response.data)
      localStorage.setItem("token", response.data.token)
      localStorage.setItem("username", response.data.username)
      alert("User created successfully")
      navigate("/dashboard");

    } catch (err) {

      if (err.response.status === 400) {
        alert("Bad request")
      } else if (err.response.status === 401) {
        alert("Invalid credentials")
      } else {
        alert("Something went wrong")
      }


    }
  }
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign Up"} />
          <SubHeading label={"Enter your infromation to create an account"} />

          <InputBox onChange={(e) => setFirstName(e.target.value)} placeholder="John" label={"First Name"} />
          <InputBox onChange={(e) => setLastName(e.target.value)} placeholder="Doe" label={"Last Name"} />
          <InputBox onChange={(e) => setUsername(e.target.value)} placeholder="harkirat@gmail.com" label={"Email"} />
          <InputBox onChange={(e) => setPassword(e.target.value)} placeholder="123456" label={"Password"} />

          <div className="pt-4">
            <Button onClick={sendData} label={"Sign Up"} />
          </div>
          <BottomWarning label={"Already have an account?"} buttonText={"Sign In"} to={"/signin"} />
        </div>
      </div>
    </div>
  )
}

export default Signup
