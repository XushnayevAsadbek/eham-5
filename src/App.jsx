import { Route, Routes } from "react-router-dom"
import { AddInvoice } from "./components/add"
import { Editinvoice } from "./components/edit"
import { Home } from "./components/home"
import { Login } from "./components/login"
import { WievInvoice } from "./components/wievInvoice"



function App() {

  return (
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path='/invoice/:id' element={<WievInvoice />} />
    <Route path="/edit" element={<Editinvoice />} />
    <Route path="/add" element={<AddInvoice />} />


   </Routes>
  )
}

export default App
