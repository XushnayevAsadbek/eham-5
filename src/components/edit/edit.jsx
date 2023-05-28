import logo from '../wievInvoice/wievinvoise.img/logo.png';
import img from '../wievInvoice/wievinvoise.img/oval.png';
import {LeftOutlined} from '@ant-design/icons'
import './edit.css'
import { useNavigate } from 'react-router-dom';
export const Editinvoice = () =>{
    const navigate = useNavigate();
    const onBack=()=>(
        navigate(-1)
    );
    return(
        <div  className='edit'>
        <div className="edit-vertical">
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
                

                <ul className='edit-box'>
                    <li>
                        <h2 className='edit-box--heading'>
                    Edit <span>#</span> XM9141
                        </h2>
                        </li>
                        <li>
                            <form action="">
                                <div style={{
                                    display:'flex',
                                    flexDirection:'column'
                                }}>
                                <label className='edit-box--label' for='username' >Client’s Name </label>
                                <input className='edit-box--inp'  id='username' type="text"/>
                                </div>

                                <div style={{
                                    display:'flex',
                                    flexDirection:'column'
                                }}>
                                <label  className='edit-box--label'for='email' >Client’s Email </label>
                                <input className='edit-box--inp'  name='email' id='email' type="email"/>
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
                               <label className='edit-box--label' for='data' >Due Date </label>
                                <input className='edit-box--data'  name='data'id='data' type="date"/>

                               </div>
                               <div  style={{
                                 display:'flex',
                                 flexDirection:'column'
                               }} >

                               <label style={{
                                paddingRight:'62px',
                                textAlign:'end'
                               }}  className='edit-box--label' for='nextdata' > Payment Terms</label>
                                 <select className='edit-box--select' name="nextdata" id="nextdata">
                                    <option value="1">Net 1 Days</option>
                                    <option value="2">Net 7 Days</option>
                                    <option value="7">Net 14 Days</option>
                                    <option  selected value="7">Net 30 Days</option>


                                 </select>
                               </div>
                                </div>
                                
                                 <div style={{
                                    display:'flex',
                                    flexDirection:'column'
                                }}>
                                <label className='edit-box--label' for='description' >Project Description </label>
                                <input className='edit-box--inp'  name='description' id='description' type="text"/>
                                </div>
                                <div style={{
                                    display:'flex',
                                    flexDirection:'column'
                                }}>
                                <label className='edit-box--label' for='Price' >Price </label>
                                <input className='edit-box--inp'  name='Price' id='Price' type="number"/>
                                </div>
                            </form>
                        </li>
                        <div className='edit-box--btn'>
                        <button className='edit-box--cancel'>Cancel</button>
                <button className='edit-box--save'>Save Changes</button>
                        </div>
            </ul>
            <div>
                

            </div>
            </div>
        </div>
    )
}