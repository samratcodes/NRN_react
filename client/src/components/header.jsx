import './header.css'

const navbar=[{
  'id':'Home',
  'options': ['objectives']
}]










const header = () => {
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
            <span className="button">Login</span>
          </div>
    
          <div className="navbar">
            <div className="navoptions">
              <div className="navoption" id="H">
              <a href={`/`}>Home</a>
              </div>
              <div className="lolabout">
                <div className="navoption" id="About_us">
                <a href={`/Subpage`}> About us <i className="fa-solid fa-caret-down"></i></a>
                  <ul className="dropdown">
                    
                    <a href={`/Subpage`}><li>Objectives and Goals</li></a>
                    <a href={`/ExecutiveBoards`}><li>Executive Boards</li></a>
                    <a href={`/Advisors`}><li>Advisors, Patrons</li></a>
                    <a href={`/Subpage`}><li>Women Affairs</li></a>
                    <a href={`/Subpage`}><li>Youth Affairs</li></a>
                    <a href={`/Subpage`}><li>ICC Members USA</li></a>
                    <a href={`/Subpage`}><li>Regional Committee Chairs</li></a>
                  </ul>
                </div>
              </div>
    
              <div className="navoption" id="Projects">
                Projects <i className="fa-solid fa-caret-down"></i>
                <ul className="dropdown">
                  <li>Objectives and Goals</li>
                  <li>Executive Boards</li>
                  <li>Advisors, Patrons</li>
                  <li>Women Affairs</li>
                  <li>Youth Affairs</li>
                  <li>ICC Members USA</li>
                  <li>Regional Committee Chairs</li>
                </ul>
              </div>
    
              {/* Repeat the above structure for other navoptions */}
              
              <div className="navoption" id="Meetings">
                Meetings <i className="fa-solid fa-caret-down"></i>
                <ul className="dropdown">
                  <li>Objectives and Goals</li>
                  <li>Executive Boards</li>
                  <li>Advisors, Patrons</li>
                  <li>Women Affairs</li>
                  <li>Youth Affairs</li>
                  <li>ICC Members USA</li>
                  <li>Regional Committee Chairs</li>
                </ul>
              </div>
    
              <div className="navoption" id="Chapter">
                Chapter & task force <i className="fa-solid fa-caret-down"></i>
                <ul className="dropdown">
                  <li>Objectives and Goals</li>
                  <li>Executive Boards</li>
                  <li>Advisors, Patrons</li>
                  <li>Women Affairs</li>
                  <li>Youth Affairs</li>
                  <li>ICC Members USA</li>
                  <li>Regional Committee Chairs</li>
                </ul>
              </div>
    
              <div className="navoption" id="Media">
                Media <i className="fa-solid fa-caret-down"></i>
                <ul className="dropdown">
                  <li>Objectives and Goals</li>
                  <li>Executive Boards</li>
                  <li>Advisors, Patrons</li>
                  <li>Women Affairs</li>
                  <li>Youth Affairs</li>
                  <li>ICC Members USA</li>
                  <li>Regional Committee Chairs</li>
                </ul>
              </div>
    
              <div className="navoption" id="Document">
                Documents <i className="fa-solid fa-caret-down"></i>
                <ul className="dropdown">
                  <li>Objectives and Goals</li>
                  <li>Executive Boards</li>
                  <li>Advisors, Patrons</li>
                  <li>Women Affairs</li>
                  <li>Youth Affairs</li>
                  <li>ICC Members USA</li>
                  <li>Regional Committee Chairs</li>
                </ul>
              </div>
    
              <div className="navoption" id="Members">
                Members <i className="fa-solid fa-caret-down"></i>
                <ul className="dropdown">
                  <li>Objectives and Goals</li>
                  <li>Executive Boards</li>
                  <li>Advisors, Patrons</li>
                  <li>Women Affairs</li>
                  <li>Youth Affairs</li>
                  <li>ICC Members USA</li>
                  <li>Regional Committee Chairs</li>
                </ul>
              </div>
    
              <div className="navoption" id="H">
               <a href={`/Ecommerce`}> Ecommerce</a>
              </div>
    
              <div>
                <span className="button"><i class="fa-solid fa-cart-shopping"></i>Cart </span>
              </div>
            </div>
          </div>
        </header>
      );
    };
  


export default header
