import {LeftOutlined } from '@ant-design/icons'
import logo from './wievinvoise.img/logo.png'
import img from './wievinvoise.img/Oval.png'
import { useParams } from 'react-router-dom';
import './wievinvoice.css';
import { hoc } from '../../utils';
import { useHomeProps } from '../home/home.props';

export const WievInvoice = hoc( useHomeProps , ({ users }) => {
// onNavigate  =useParams();
const {id} = useParams();

    return (
        <div className='wiveInvoise'>
         <div className="wiveInvoise-vertical">
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
                <button className='back'> <LeftOutlined style={{
                    color:'#7C5DFA',
                    marginRight:'24px',
                    fontSize:'10px',
                }} />Go back</button>
                <div className='btn-card'>
                    <p className='btn-card--text'>status</p>
                    <div className='btn-card--box'>
                   <p className='btn-card--box__text'> <span className='btn-card--box__span'></span> Pending</p>
                    </div>
                    <button className='btn-card--edit'>Edit</button>
                    <button className='btn-card--delete' >Delete</button>
                    <button className='btn-card--paid' >Mark as Paid</button>

                </div>

                <ul className='box'>
                    { users.map((use) =>
               <div style={{
                padding:'51px 48px',
               }}>
               <h2 className='box-heading'><span>#</span> {use?.id}</h2>
                <p className='box-text'>{use?.description}</p>
                <div style={{
                    display:'flex',
                    justifyContent:'space-between',
                    gap:'50px',
                    marginTop:'49px',
                    marginBottom:'40px',
                }}>
                    <li>
                        <p className='box-text'>Invoice Date</p>
                        <h3 className='box-flex-heading'>
                        21 Aug 2021
                        </h3>
                    </li>
                    <li>
                        <p className='box-text'>Bill To </p>
                        <h3 className='box-flex-heading'>
                        Alex Grim
                        </h3>
                    </li>
                    <li>
                        <p className='box-text'>Sent to </p>
                        <h3 className='box-flex-heading'>
                        alexgrim@mail.com
                        </h3>
                    </li>
                </div>
                 <li>
                 <p className='box-text'>Payment Due </p>
                 <h3 className='box-flex-heading'> 20 Sep 2021</h3>
                 </li>
                 <li className='box-price'>
                <p className='box-price--text'>
                Amount Due
                </p>
                <h2 className='box-price-heading'>
                £ 556.00
                </h2>
                 </li>
               </div>
  )}
            </ul>
            </div>
            
        </div>
    );
})