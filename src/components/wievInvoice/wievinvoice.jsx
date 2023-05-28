import { LeftOutlined } from '@ant-design/icons'
import logo from './wievinvoise.img/logo.png'
import img from './wievinvoise.img/Oval.png'
import { useNavigate, useParams } from 'react-router-dom';
import './wievinvoice.css';
import { hoc } from '../../utils';
import { useAuth } from "../../hooks/useauth.jsx"

import { useHomeProps } from '../home/home.props';

export const WievInvoice = hoc(useHomeProps, ({ users, onLogin }) => {
    const params = useParams().userId;
    console.log(params);
    const navigate = useNavigate();
    const back = () => {
        navigate(-1)
    }
let user = users.find(item => item.id == params);
console.log(user);
    const editBack = () => {
        navigate('/edit')
    };
    // const onEdit = () =>{
    //     if(!localStorage.getItem("token")){
    //         navigate("/login")
    //     }else{
    //         navigate("/edit",{state:users});
    //     }
    // };


    // let users =users.find((use)=>use.id==params);
    // console.log(users);

    return (

        <div className='wiveInvoise'>
            <div className="wiveInvoise-vertical">
                <img src={logo} alt="logo" style={{
                    width: '103px',
                    height: '103px',
                }} />
                <p className='bor-top'></p>
                <img className='img-bottom' src={img} alt="" style={{
                    width: '40px',
                    height: '40px',
                }} />
            </div>
            <div style={{
                marginTop: '64px',
            }} >
                <button onClick={back} className='back'> <LeftOutlined style={{
                    color: '#7C5DFA',
                    marginRight: '24px',
                    fontSize: '10px',
                }} />Go back</button>
                <div className='btn-card'>
                    <p className='btn-card--text'>status</p>
                    <div className='btn-card--box'>
                        <p className='btn-card--box__text'> <span className='btn-card--box__span'></span> Pending</p>
                    </div>
                    <button onClick={editBack} className='btn-card--edit'>Edit</button>
                    <button className='btn-card--delete' >Delete</button>
                    <button className='btn-card--paid' >Mark as Paid</button>

                </div>

                <ul className='box'>
                    
                        <div style={{
                            padding: '51px 48px',
                        }} >
                            <h2 className='box-heading'><span>#</span> {user?.id}</h2>
                            <p className='box-text'>{user?.description}</p>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                gap: '50px',
                                marginTop: '49px',
                                marginBottom: '40px',
                            }}>
                                <li>
                                    <p className='box-text'>Invoice Date</p>
                                    <h3 className='box-flex-heading'>
                                        {user?.createdDate}
                                    </h3>
                                </li>
                                <li>
                                    <p className='box-text'>Bill To </p>
                                    <h3 className='box-flex-heading'>
                                        {user?.to}
                                    </h3>
                                </li>
                                <li>
                                    <p className='box-text'>Sent to </p>
                                    <h3 className='box-flex-heading'>
                                        {user?.email}
                                    </h3>
                                </li>
                            </div>
                            <li>
                                <p className='box-text'>Payment Due </p>
                                <h3 className='box-flex-heading'>{user?.dueDate}</h3>
                            </li>
                            <li className='box-price'>
                                <p className='box-price--text'>
                                    Amount Due
                                </p>
                                <h2 className='box-price-heading'>
                                    £ {user?.price}
                                </h2>
                            </li>
                        </div>
                    
                </ul>
            </div>

        </div>
    );
})