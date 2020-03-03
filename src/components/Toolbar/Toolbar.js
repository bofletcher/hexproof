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
     <div className="toolbar__logo"><a href="/">H3XPR00F</a></div>
     <div className="spacer"></div>
     <div className="toolbar_navigation-items">
       <ul>
         <Link to="/">
         <li>H0M3</li>
         </Link>
         <Link to="/about">
         <li>AB0UT</li>
         </Link>
         <Link to="/music">
         <li>MUS1C</li>
         </Link>
         <Link to="/photos">
         <li>PH0T0S</li>
         </Link>
         <Link to="/reviews">
         <li>R3V13WS</li>
         </Link>
         <Link to="/merch">
         <li>M3RCH</li>
         </Link>
         <Link to="/video">
         <li>V1D3O</li>
         </Link>
         <Link to="/contact">
         <li>C0NT4CT</li>
         </Link>
       </ul>
     </div>
   </nav>
 </header>
)

export default Toolbar;