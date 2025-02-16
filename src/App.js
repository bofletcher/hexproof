import React, { Component } from 'react';
import "./App.css";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer"
import Backdrop from "./components/Backdrop/Backdrop"
import Home from "./components/Pages/Home/Home";
import Photos from "./components/Pages/Photos/Photos";
import About from "./components/Pages/About/About"
import Music from "./components/Pages/Music/Music"
import Reviews from "./components/Pages/Reviews/Reviews"
import Merch from "./components/Pages/Merch/Merch"
import Video from "./components/Pages/Video/Video"
import Contact from "./components/Pages/Contact/Contact"


import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import { createBrowserHistory } from "history";


const history = createBrowserHistory();

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState)=> {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    })
  }

  backDropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  }

  render() {
  
  let backdrop;

  if (this.state.sideDrawerOpen) {
    backdrop = <Backdrop click={this.backDropClickHandler}/>
  }
  
  return (
    <Router history={history}>
    <div style={{height: "100%"}}>
      <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
      <SideDrawer show={this.state.sideDrawerOpen} click={this.backDropClickHandler}/>
      {backdrop}
      <main className="main-container" style={{marginTop: "3.5em"}}>
        <Switch >
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About}/>
        <Route path="/photos" exact component={Photos}/>
        <Route path="/music" exact component={Music}/>
        <Route path="/reviews" exact component={Reviews}/>
        <Route path="/merch" exact component={Merch}/>
        <Route path="/video" exact component={Video}/>
        <Route path="/contact" exact component={Contact}/>
        </Switch>
      </main>
    </div>
    </Router>
  );
  }
}

export default App;
