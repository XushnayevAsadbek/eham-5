import { RightOutlined } from '@ant-design/icons'
import logo from './home.img/logo.png'
import oval from './home.img/Oval.png'
import { useHomeProps } from './home.props'
import './home.css'
import { hoc } from '../../utils'
import { Link, useNavigate } from 'react-router-dom'
import {v4} from 'react-uuid'
import { useRef } from 'react'
export const Home = hoc( useHomeProps, ({ users ,onAdd }) => {
    const navigate = useNavigate();
    const inVoice =()=>(
        navigate("/invoice")
    );
    const addNew =()=>(
        navigate("/add")
    )
    const fullName = useRef();
    const email = useRef();
    const img = useRef();
    const paid = useRef();
    const to = useRef();
    const dueDate = useRef();
    const term = useRef();
    const createdDate = useRef();
    const description = useRef();
    const price = useRef();

    const AddOn=()=>{
        if (!localStorage.getItem("token")) {
            navigate("/login")
        }else{
            navigate("/add",{state:users});
        }
    }
  console.log(users);
    return (
        // <Link to={`/${use.id}`} key={use.id} >

        <div className='home-page' >
            <div className="header-vertical">
                <img src={logo} alt="logo" style={{
                    width: '103px',
                    height: '103px',
                }} />
                <p className='bor-top'></p>
                <img className='img-bottom' src={oval} alt="" style={{
                    width: '40px',
                    height: '40px',
                }} />
            </div>
            <div className="container">
                <div className='home'>
                    <div className='home-title'>
                        <h1 className='home-title__heading'>Invoices</h1>
                        <p className='home-title__text'>There are 6 total invoices</p>
                    </div>

                    <div className='home-form'>

                        <form >

                            <select id='Filter by status' name='Filter by status' >
                                <option >Filter by status</option>
                                <option value="All" >All</option>
                                <option value="Pending">Pending</option>
                                <option value="Paid">Paid</option>


                            </select>
                        </form>

                        <button  onClick={()=> AddOn()} className='home-form--btn'> <span className='span-plus--btn'>+</span> New Invoice</button>

                    </div>
                </div>

                <div>
                    <ul className='home-list'>
                        <li >
                            <h3 className='home-list--heading'> <span>#</span> RT3080</h3>
                        </li>
                        <li>
                            <p className='home-list--text' >Due  19 Aug 2021</p>
                        </li>
                        <li>
                            <p className='home-list--text'> Jensen Huang</p>
                        </li>
                        <li>
                            <p className='home-list--money'>£ 1,800.90</p>
                        </li>

                        <li className='home-list--paid'>

                            <p className='home-list--paid__text'> Paid</p>


                        </li>
                        <li className='home-list-icon'>
                            <RightOutlined />
                        </li>
                    </ul>
                </div>
                

                
                {users && users.map((use,index) => 

                    <ul onClick={inVoice} key={use.id} className='home-list--one' >
                            <li >
                                <h3 className='home-list--heading'> <span>#</span>{index+1}</h3>
                            </li>
                          

                        <li>
                              <p className='home-list--text' >{use?.createdDate}</p>
                              </li>
                              <li>
                              <p className='home-list--text'>{use?.to}</p>
                              </li>
                              <li> 
                                 <p className='home-list--money'>£ {use?.price}</p>
                                </li>

                                <li >
                                <div className='home-list--pending'>
                                    
                                <p className='home-list--pending__text'> </p>
                                </div>
                               

                            </li>
                            <li className='home-list-icon'>
                            <RightOutlined />
                            </li>

                    </ul>
                       )}
            </div>
        </div>
        //  </Link>
    )
})