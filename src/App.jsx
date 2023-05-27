import { Route, Routes } from "react-router-dom"
import { Home } from "./components/home"
import { Login } from "./components/login"
import { WievInvoice } from "./components/wievInvoice"



function App() {

  return (
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/invoice" element={<WievInvoice />} />
   </Routes>
  )
}

export default App
