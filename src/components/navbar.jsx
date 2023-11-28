import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../server/auth/auth-context";
import { isDesktop } from "../utils/screen-size";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => {     
     const { currentUser } = useContext(AuthContext);
     let location = useLocation();
     
     
   
     if (currentUser) {
            return (
            <header>
             <nav >
                  { !isDesktop ?
                  <ul >
                       <li >About</li>
                       <li >Works</li>
                       <li >Blogs</li>
                  </ul>:<image></image>
                  }
             </nav>
            </header>
            );
          }
          else{
             return (
                  <header>
                  <nav>
                  </nav>
                  </header>
                )
          }  
   }
   
   export default NavBar