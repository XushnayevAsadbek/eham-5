import { useState, useEffect } from 'react';
import { Navigate, useNavigate } from "react-router-dom";


export const useHomeProps= () =>{


const [users, setUse] = useState([]);
const navigate = useNavigate();
// const onNavigate = () => {
//     navigate('/WievInvoice')
// }
useEffect(() => {
    fetch(`https://invoices-8ehs.onrender.com/invoices`)
        .then((res) => res.json())
        .then((data) => {
            setUse(data)
            console.log(data);
        })
        .catch((err) => console.error(err))
}, [])
return { users }

}