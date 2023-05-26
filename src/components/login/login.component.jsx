import { Button, Form, Input , Row } from "antd";
import './login.css'

export const Login = () =>{
    return(
        <Row className="login-form" style={{height:'100%',
        flexDirection:'column',
        }} align={"middle"} justify={'center'}>
            <h2 className="login-heading">Login</h2>
           <div >
           <Form layout="vertical"  >
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
                    
                    <Input 
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
                    placeholder="Graphic Design"
                    style={{
                        width:'516px',
                        height:'46.86px'
                    }} type="password" />
                 </Form.Item>

                <Row justify={"end"} >
                <button htmlType="sumbit" className="login-btn" >Login</button>
                </Row>
            </Form>
           </div>
        </Row>
    )
}