import { Button, Form, Input , Row } from "antd";
import { useRef } from "react";
import axios from 'axios'
import {useAuth} from '../../hooks/useauth.jsx';
// import { hoc } from "../../utils";
import './login.css'
// import { useLoginProps } from "./login.props.jsx";

export const Login =() =>{
      const[ , setToken] = useAuth();
      const emailRef = useRef();
      const passwordRef = useRef();
      const onLoginHandle = (e) => {
         if (emailRef.current.value && passwordRef.current.value) {
           axios
             .post("https://invoices-8ehs.onrender.com/login", {
               email: emailRef.current.value,
               password: passwordRef.current.value,
             })
             .then((res) => {
               if (res.status === 200) {
                 localStorage.setItem("id", res.data.user.id)
                 dispatch(tokenActions.setToken(res.data));
                 navigate("/add");
               }
             }).catch(err => alert("Email or password error. Try again!"))
         }else{
         //   alert("Please, you must be fill email and password fields!")
         }
       };
      // return{onLogin,emailRef, passwordRef};
  
    return(
        <Row className="login-form" style={{height:'100%',
        flexDirection:'column',
        }} align={"middle"} justify={'center'}>
            <h2 className="login-heading">Login</h2>
           <div >
           <Form layout="vertical" onFinish={onLoginHandle} >
                 <Form.Item
                 
                    label ="Email"
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your email!',
                      },
                    ]}
                 >
                    
                    <Input ref={emailRef}
                    placeholder="alexgrim@mail.com"
                     style={{
                        width:'516px',
                        height:'46.86px',
                    }} type="email" />
                 </Form.Item>
                 <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your password!',
                      },
                    ]}
                 >
                    
                    <Input 
                    ref={passwordRef}
                    placeholder="Graphic Design"
                    style={{
                        width:'516px',
                        height:'46.86px'
                    }} type="password" />
                 </Form.Item>

                <Row justify={"end"} >
                <button type="sumbit" className="login-btn" >Login</button>
                </Row>
            </Form>
           </div>
        </Row>
    )
}