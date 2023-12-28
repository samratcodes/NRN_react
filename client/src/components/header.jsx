import Navdata from './Navdata/Navdata';
import  { useState } from 'react';
import './header.css'

const navbar=[{
  'id':'Home',
  'options': ['objectives']
}]

const header = ({handleLinkinAPP}) => {
  const handleLink=(props)=>{
    handleLinkinAPP(props)
  }
  return (
  
        <header>
          <div className="top">
      <div className="top_logo">
      <img src="src\assets\logo.jpg" alt="image" />
            नेपाल ता.घे. द. कोरिया
      </div>
            <div className="phone">
              <div className="phone_text">
                <div className="phone_text_top">
              Help Desk
                </div>
                <div>
                  (844) 676-2872
                </div>
              </div>
              <i className="fa-solid fa-phone"></i>
            </div>
            <a href="/login"><span className="button">Login</span></a>
          </div>
    
<Navdata onLinkClick={handleLink}/>
        </header>
      );
    };
  


export default header
