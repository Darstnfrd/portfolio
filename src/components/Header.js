import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import Logo from '../logo.png';

class Header extends Component {
  render() {
    
    return (
      <header className="container">
        <nav className="navbar navbar-expand-md sticky-top">
          <a className="navbar-brand" href="#"><img src={Logo} alt="" /></a>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end nav-fill" id="navbarCollapse">
            <div className="navbar-nav">
                <Link className="nav-item nav-link" to="/">Home</Link>
                <Link className="nav-item nav-link" to="/About">About</Link>
                <Link className="nav-item nav-link" to="/Features">Features</Link>
                <Link className="nav-item nav-link" to="/Contact">Contact</Link>
            </div>
            <form className="form-inline">
              <button className="btn btn-yellow my-2 my-sm-0 nav-item" type="submit">Sign up</button>
              <button className="btn btn-lite my-2 my-sm-0 nav-item" type="submit">Log in</button>
            </form>
            
          </div>

        </nav>
      </header>
    );
  }
}

export default Header;
