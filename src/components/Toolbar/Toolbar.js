import React from "react";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton"
import "./Toolbar.css";
import {Link} from "react-router-dom";

const Toolbar = props => (
 <header className="toolbar">
   <nav className="toolbar__navigation"> 
     <div className="toolbar__toggle-button">
       <DrawerToggleButton click={props.drawerClickHandler}/>
     </div>
     <div className="toolbar__logo"><a href="/">THE LOGO</a></div>
     <div className="spacer"></div>
     <div className="toolbar_navigation-items">
       <ul>
         <Link to="/">
         <li>Home</li>
         </Link>
         <Link to="/about">
         <li>About</li>
         </Link>
         <Link to="/music">
         <li>Music</li>
         </Link>
         <Link to="/photos">
         <li>Photos</li>
         </Link>
         <Link to="/reviews">
         <li>Reviews</li>
         </Link>
         <Link to="/merch">
         <li>Merch</li>
         </Link>
         <Link to="/video">
         <li>Video</li>
         </Link>
         <Link to="/contact">
         <li>Contact</li>
         </Link>
       </ul>
     </div>
   </nav>
 </header>
)

export default Toolbar;