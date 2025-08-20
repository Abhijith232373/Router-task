import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} > </Route>
      <Route path='/Login' element={<Login />}></Route>
      <Route path='/Signup' element={<Signup />}></Route>
    </Routes>

  )
}

export default App
