import React, { Component } from 'react';
import Home from './home';

export class Image extends Component {

  render() {

  	var imagearray = [
  	{
  		name: 'heart',
  		src: require('../../heart.png'),
  		class: 'icon mr-2 rounded'
  	},
  	{
  		name: 'heartline', 
  		src: require('../../heartline.png'),
  		class: 'icon mr-2 rounded'
  	},
  	{
  		name: 'heartlinewhite',
  		src: require('../../heartline-white.png'),
  		class: 'icon mr-2 rounded'
  	},
  	{
  		name: 'dottedline',
  		src: require('../../dottedline.png'),
  		class: 'icon mr-5 rounded'
  	},
  	{
  		name: 'signupicon1',
  		src: require('../../signup-icon1.png'),
  		class: 'signup-icon mr-5 rounded'
  	},
  	{
  		name: 'signupicon2',
  		src: require('../../signup-icon2.png'),
  		class: 'signup-icon mr-5 rounded'
  	},
	{	
		name: 'signupicon3', 
  		src: require('../../signup-icon3.png'),
  		class: 'signup-icon mr-5 rounded'
  	},
  	{	
  		name: 'testimonial1',
  		src: require('../../testimonial1.jpg'),
  		class: 'card-img-top'
  	},
  	{
  		name: 'testimonial2', 
  		src: require('../../testimonial2.jpg'),
  		class: 'card-img-top'
  	},
  	{
  		name: 'testimonial3',
  		src: require('../../testimonial3.jpg'),
  		class: 'card-img-top'
  	}
	];


	

  	/*if(this.props.name === imagearray.name)

  	return (<img src={imagearray.src} alt="" className={imagearray.class} data-holder-rendered="true" />);*/

  	return null;
  }
}

export default Image;