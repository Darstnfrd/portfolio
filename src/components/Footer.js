import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class Footer extends Component {
  render() {
    
    return (
      <footer className="footer">
        <div className="container">
	        <div className="row">
	          <div className="col-md-4">
	          		<h3>Quick Links</h3>
	          		<a className="nav-item nav-link" href="#"><span className="glyphicon glyphicon-chevron-right"></span> Home</a>
	                <a className="nav-item nav-link" href="#"><span className="glyphicon glyphicon-chevron-right"></span> About</a>
	                <a className="nav-item nav-link" href="#"><span className="glyphicon glyphicon-chevron-right"></span> Features</a>
	                <a className="nav-item nav-link" href="#"><span className="glyphicon glyphicon-chevron-right"></span> Contact</a>
	          </div>

	          <div className="col-md-4">
	          		<h3>Our Locations</h3>
	          		<a className="nav-item nav-link" href="#"><span className="glyphicon glyphicon-chevron-right"></span> Bradenton</a>
	                <a className="nav-item nav-link" href="#"><span className="glyphicon glyphicon-chevron-right"></span> Sarasota</a>
	                <a className="nav-item nav-link" href="#"><span className="glyphicon glyphicon-chevron-right"></span> Tampa</a>
	                <a className="nav-item nav-link" href="#"><span className="glyphicon glyphicon-chevron-right"></span> St. Petersburg</a>
	                <a className="nav-item nav-link" href="#" ><span className="glyphicon glyphicon-chevron-right"></span> Winter Park</a>
	                <a className="nav-item nav-link" href="#"><span className="glyphicon glyphicon-chevron-right"></span> Orlando</a>
	                <a className="nav-item nav-link" href="#"><span className="glyphicon glyphicon-chevron-right"></span> Fort Myers</a>
	                <a className="nav-item nav-link" href="#"><span className="glyphicon glyphicon-chevron-right"></span> Naples</a>
	          </div>

	          <div className="col-md-4">
	          		<h3>Popular Links</h3>
	          		<a className="nav-item nav-link" href="#" ><span className="glyphicon glyphicon-chevron-right"></span> Christian Singles</a>
	                <a className="nav-item nav-link" href="#"><span className="glyphicon glyphicon-chevron-right"></span> Jewish Singles</a>
	                <a className="nav-item nav-link" href="#"><span className="glyphicon glyphicon-chevron-right"></span> Black Singles</a>
	                <a className="nav-item nav-link" href="#"><span className="glyphicon glyphicon-chevron-right"></span> Hispanic Singles</a>
	                <a className="nav-item nav-link" href="#"><span className="glyphicon glyphicon-chevron-right"></span> Asian Singles</a>
	                <a className="nav-item nav-link" href="#"><span className="glyphicon glyphicon-chevron-right"></span> 30s Singles</a>
	                <a className="nav-item nav-link" href="#"><span className="glyphicon glyphicon-chevron-right"></span> Senior Singles</a>
	          </div>

	        </div>
	        
        </div>
        <div id="copyright">
        	<div className="row">
	    		<p className="col-md-12"> © 2018 Suncoast Singles. All Rights Reserved.</p>
	    	</div>
	    </div>
      </footer>
    );
  }
}

export default Footer;
