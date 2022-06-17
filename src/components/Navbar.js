import './Navbar.css'
import logo from './logo_2.png'


function Navbar(props) {
    
    return (
      <div id="navbar">
          <div id="logo">
              <img src={logo} width="120px"/>       
          </div>
          <div id="user_info">
              <span className="material-symbols-outlined">
                  notifications
              </span>
              <span className="material-symbols-outlined">
                  mail
              </span>
              <p>Welcome {props.name}</p>
          </div>
      </div>
    )
  }
  
  
  
  
  
  export default Navbar;
  
  