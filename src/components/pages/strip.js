import React, { Component } from 'react';
import Home from './home';
import Image from './image';

export class Strip extends Component {
  render() {

  	const heartline ={
  		src: require('../../heartline.png'),
  		class: 'icon mr-2 rounded'
  	}

  	const heartlinewhite ={
  		src: require('../../heartline-white.png'),
  		class: 'icon mr-2 rounded'
  	}

  	function img(x, y){
  		return (<img src={x} alt="" className={y} data-holder-rendered="true" />);
  	}

  	const colorclass = 'strip-' + this.props.color + ' container-fluid"';
	
  	//If subheading exists display it or else remove empty paragraph tag
	function subheading(x){
  		if (x){
  			return (<p className="text-muted">{x}</p>);
  		}
  	}

  	return (
  		<div id={this.props.background} className={colorclass}>
  			
  			<div className="row mb-5">
	      		<div className="col-md-12">
	      			<h1>{this.props.heading}</h1>
	      			{img(heartline.src,heartline.class)}
	      			{subheading(this.props.subheading)}
	      		</div>
	      	</div>

	      	<div className="row mb-5 justify-content-between">
	      		{this.props.children}
	      	</div>
	      	

	    </div>
			);
  }
}

export default Strip;