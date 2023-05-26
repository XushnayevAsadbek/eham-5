import {RightOutlined} from '@ant-design/icons'
import logo from './home.img/logo.png'
import img from './home.img/Oval.png'
import './home.css'
export const Home = () => {
    return (
        <div className='home-page' >
            <div className="header-vertical">
                <img src={logo} alt="logo" style={{
                    width:'103px',
                    height:'103px',
                    // paddingBottom:'65px',
                }} />
               <p className='bor-top'></p>
                <img className='img-bottom' src={img} alt="" style={{
                    width:'40px',
                    height:'40px',
                    // marginTop:'580px',
                    // marginLeft:'31px',
                    // marginRight:'24px',
                    // borderTop:'1px solid red'

                   

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
                        <option  value="">Filter by status</option>
                            <option   value="All">All</option>
                            <option value="Pending">Pending</option>
                            <option value="Paid">Paid</option>
                           
                    
                        </select>
                        </form>
                   
                       <button className='home-form--btn'> <span className='span-plus--btn'>+</span> New Invoice</button>
                      
                      </div>
                    </div>

                    <div>
                        <ul className='home-list'>
                            <li >
                                <h3  className='home-list--heading'> <span>#</span> RT3080</h3>
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
                    <div>
                        <ul className='home-list--one'>
                            <li >
                                <h3  className='home-list--heading'> <span>#</span> #XM9141</h3>
                                </li>
                              <li>
                              <p className='home-list--text' >Due  20 Sep 2021</p>
                              </li>
                              <li>
                              <p className='home-list--text'> Alex Grim</p>
                              </li>
                              <li> 
                                 <p className='home-list--money'>£ 556.00</p>
                                </li>

                                <li >
                                <div className='home-list--pending'>
                                    
                                <p className='home-list--pending__text'> Pending</p>
                                </div>
                               

                            </li>
                            <li className='home-list-icon'>
                            <RightOutlined />
                            </li>
                        </ul>
                    </div>
                
            </div>
        </div>
    )
}