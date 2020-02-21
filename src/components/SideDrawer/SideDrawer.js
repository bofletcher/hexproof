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
         <li onClick={props.click}>Home</li>
         </Link>
         <Link to="/about">
         <li onClick={props.click}>About</li>
         </Link>
         <Link to="/music">
         <li onClick={props.click}>Music</li>
         </Link>
         <Link to="/photos">
         <li onClick={props.click}>Photos</li>
         </Link>
         <Link to="/reviews">
         <li onClick={props.click}>Reviews</li>
         </Link>
         <Link to="/merch">
         <li onClick={props.click}>Merch</li>
         </Link>
         <Link to="/video">
         <li onClick={props.click}>Video</li>
         </Link>
         <Link to="/contact">
         <li onClick={props.click}>Contact</li>
         </Link>
    </ul>
  </nav>
  )
};

export default SideDrawer;