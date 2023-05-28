import {LeftOutlined} from '@ant-design/icons'
import { useRef } from 'react'
import {v4} from 'react-uuid'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import logo from '../home/home.img/logo.png'
import img from '../home/home.img/oval.png'
import './add.css'
import { Home } from '../home/home.component'
export const AddInvoice = ()=>{
    const nameRef =useRef();
    const emailRef = useRef();
    const dateRef = useRef();
    const termRef =useRef();
    const descRef = useRef ();
    const priceRef = useRef ();
    const navigate = useNavigate();
    const onBack=()=>(
        navigate(-1)
    );
    const dicCard =()=>(
        navigate("/")
    );
// console.log(onAdd);
    const onAdd =() =>{
        // evt.preventDefault();
        const newAdd = {
          userId: 1,
          paid: false,
          email: emailRef.current.value,
          to: nameRef.current.value,
          dueDate: dateRef.current.value,
          term: +termRef.current.value,
          createdDate: dateRef.current.value,
          description: descRef.current.value,
          price: +priceRef.current.value,
          id: v4,

        };
          axios.post("https://invoices-8ehs.onrender.com/invoices",
           newAdd, {
            Headers: {
                Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im51cnVsbG9oMjNAZ21haWwuY29tIiwiaWF0IjoxNjg1Mjk4Nzc5LCJleHAiOjE2ODUzMDIzNzksInN1YiI6IjEifQ.T--Zp--SPu638F8gM-bvpW"}`
            }
          }).then(res => {
            console.log(res);
            emailRef.current.value = "";
            nameRef.current.value = "";
            termRef.current.value = "";
            dateRef.current.value = "";
            descRef.current.value = "";
            priceRef.current.value = "";
            navigate("/"+$(newAdd.id));
          })
          .catch(err => console.log(err))
  };

       
   
 
    
    return(
        <div  className='add'>
        <div className="add-vertical">
                <img src={logo} alt="logo" style={{
                    width:'103px',
                    height:'103px',
                }} />
               <p className='bor-top'></p>
                <img className='img-bottom' src={img} alt="" style={{
                    width:'40px',
                    height:'40px',
                    }} />
            </div>
            <div style={{
                marginTop:'64px',
            }} >
                <button onClick={onBack} className='back'> <LeftOutlined style={{
                    color:'#7C5DFA',
                    marginRight:'24px',
                    fontSize:'10px',
                }} />Go back</button>
                

                <ul className='add-box'>
                    <li>
                        <h2 className='add-box--heading'>
                        New Invoice
                        </h2>
                        </li>
                        <li>
                            <form >
                                <div style={{
                                    display:'flex',
                                    flexDirection:'column'
                                }}>
                                <label className='add-box--label' for='username' >Client’s Name </label>
                                <input ref={nameRef} min="3" max="50" className='add-box--inp'  id='username' type="text"/>
                                </div>

                                <div style={{
                                    display:'flex',
                                    flexDirection:'column'
                                }}>
                                <label  className='add-box--label'for='email' >Client’s Email </label>
                                <input ref={emailRef} required className='add-box--inp'  name='email' id='email' type="email"/>
                                </div>

                                <div style={{
                                     display:'flex',
                                     justifyContent:'space-between',
                                    //  gap:'150px'

                                }} >
                               <div style={{
                                 display:'flex',
                                 flexDirection:'column'
                               }}>
                               <label className='add-box--label' for='data' >Due Date </label>
                                <input ref={dateRef} required className='add-box--data'  name='data'id='data' type="date"/>

                               </div>
                               <div  style={{
                                 display:'flex',
                                 flexDirection:'column'
                               }} >

                               <label style={{
                                paddingRight:'62px',
                                textAlign:'end'
                               }}  className='add-box--label' for='nextdata' > Payment Terms</label>
                                 <select required ref={termRef} className='add-box--select' name="nextdata" id="nextdata">
                                    <option value="1">1</option>
                                    <option value="7">7</option>
                                    <option value="14">14</option>
                                    <option  value="7">30</option>


                                 </select>
                               </div>
                                </div>
                                
                                 <div style={{
                                    display:'flex',
                                    flexDirection:'column'
                                }}>
                                <label className='add-box--label' for='description' >Project Description </label>
                                <input ref={descRef} className='add-box--inp'  name='description' id='description' type="text"/>
                                </div>
                                <div style={{
                                    display:'flex',
                                    flexDirection:'column'
                                }}>
                                <label className='add-box--label' for='Price' >Price </label>
                                <input ref={priceRef} min="100" max="1000" required className='add-box--inp'  name='Price' id='Price' type="number"/>
                                </div>
                            </form>
                        </li>
                        <div className='add-box--btn'>
                        <button onClick={dicCard} className='add-box--cancel'>Discard</button>
                <button type='submit' onClick={onAdd} className='add-box--save'>Save & Send</button>
                        </div>
            </ul>
            <div>
                

            </div>
            </div>
        </div>
    )
}