import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"
import Dashboard from "./pages/Dashboard"
import SendMoney from "./pages/SendMoney"
function App() {

  return (
    //this is one way of routing other is to create an array of objects and map through them
    //and create a route for each object
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Welcome to the app</h1>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/send" element={<SendMoney/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
