// import { useRef } from "react";
// import axios from 'axios'
// import {useAuth} from '../../hooks/useauth.jsx';
// export const useLoginProps = () => {
//     const[ , setToken] = useAuth();
//     const emailRef = useRef();
//     const passwordRef = useRef();
//     const onLogin = ()=>{
//         let email = emailRef.current.value;
//         let password = passwordRef.current.value;
//         console.log(email , password);
//         let data ={
//             email,
//             password,
//         }
        
//         axios
//         .post("https://invoices-8ehs.onrender.com/login", {
//           email: emailRef.current.value,
//           password: passwordRef.current.value,
//         })
//         .then((res) => {
//           if (res.status === 200) {
//             localStorage.setItem("id", res.data.user.id)
//             dispatch(tokenActions.setToken(res.data));
//             navigate("/add");
//           }
//         }).catch(err => alert("Email or password error. Try again!"))
//     };
//     return{onLogin,emailRef, passwordRef};
// }