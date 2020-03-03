import React from "react";
import "./SideDrawer.css"
import {Link} from "react-router-dom";

const SideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }

  return (
  <nav className={drawerClasses}>
    <ul>
    <Link to="/">
         <li onClick={props.click}>H0M3</li>
         </Link>
         <Link to="/about">
         <li onClick={props.click}>AB0UT</li>
         </Link>
         <Link to="/music">
         <li onClick={props.click}>MUS1C</li>
         </Link>
         <Link to="/photos">
         <li onClick={props.click}>PH0T0S</li>
         </Link>
         <Link to="/reviews">
         <li onClick={props.click}>R3V13WS</li>
         </Link>
         <Link to="/merch">
         <li onClick={props.click}>M3RCH</li>
         </Link>
         <Link to="/video">
         <li onClick={props.click}>V1D30</li>
         </Link>
         <Link to="/contact">
         <li onClick={props.click}>C0NT4CT</li>
         </Link>
    </ul>
  </nav>
  )
};

export default SideDrawer;