import React, { Component } from 'react';
import SignupForm from './signupform'
import Strip from './strip';
import Image from './image';

class Home extends Component {
  render() {

  	const heart ={
  		src: require('../../heart.png'),
  		class: 'icon mr-2 rounded'
  	}

  	const heartline ={
  		src: require('../../heartline.png'),
  		class: 'icon mr-2 rounded'
  	}

  	const heartlinewhite ={
  		src: require('../../heartline-white.png'),
  		class: 'icon mr-2 rounded'
  	}

  	const dottedline ={
  		src: require('../../dottedline.png'),
  		class: 'icon mr-5 rounded'
  	}

  	const signupicon1 ={
  		src: require('../../signup-icon1.png'),
  		class: 'signup-icon mr-5 rounded'
  	}

  	const signupicon2 ={
  		src: require('../../signup-icon2.png'),
  		class: 'signup-icon mr-5 rounded'
  	}

  	const signupicon3 ={
  		src: require('../../signup-icon3.png'),
  		class: 'signup-icon mr-5 rounded'
  	}

  	const testimonial1 ={
  		src: require('../../testimonial1.jpg'),
  		class: 'card-img-top'
  	}

  	const testimonial2 ={
  		src: require('../../testimonial2.jpg'),
  		class: 'card-img-top'
  	}

  	const testimonial3 ={
  		src: require('../../testimonial3.jpg'),
  		class: 'card-img-top'
  	}

  	function img(x, y){
  		return (<img src={x} alt="" className={y} data-holder-rendered="true" />);
  	}

    return (

      <main>
        <div id="home-bg" className="jumbotron">
        	<div id="home-text" className="container">
        		<div className="row justify-content-end">
		        	<div className="col-md-5">
		          		<h1>Find your perfect match</h1>
		          		<p>Our premier matchmaking service covers all of Florida's beautiful suncoast</p>
		          		<p><a className="btn btn-lite btn-block" href="#" role="button">Get Started</a></p>
		        	</div>
	        	</div>
        	</div>
      	</div>

      	{/* -------------------------------------------------------- */}


      	<Strip color="white" heading="Join Suncoast Singles Free Today" subheading="Yesterday is history, tomorrow is a mystery. That is why today is called the “present”, because it is a gift!">
      		
      		<div className="col-md-6 pt-4">
      			<h4>How It Works</h4>
      			{img(heartline.src, heartline.class)}
      			
      			<div className="media text-muted">
		          {img(signupicon1.src, signupicon1.class)}
		          <h6 className="media-body pt-4 pb-4 lh-125">
		            <p><strong className="d-block text-gray-dark">Sign Up for Free</strong></p>
		            <p>Sign up for your free private profile <i>(by filling the form on the right)</i> and provide as much or as little information as you like.</p> 
		          </h6>
		        </div>

		        <div className="media text-muted">
		        	{img(dottedline.src,dottedline.class)}	
		        </div>

		        <div className="media text-muted">
		          {img(signupicon2.src, signupicon2.class)}
		          <h6 className="media-body pt-3 lh-125">
		            <p><strong className="d-block text-gray-dark">Our Matchmakers Get to Work</strong></p>
		            <p>All of our new clients are personally screened by a professional matchmaker. We build your custom profile by collecting information and listening to your wants and desires.</p> 
		          </h6>
		        </div>

		        <div className="media text-muted">
		        	{img(dottedline.src,dottedline.class)}
		        </div>

		        <div className="media text-muted">
		          {img(signupicon3.src, signupicon3.class)}
		          <h6 className="media-body pt-3 lh-125">
		            <p><strong className="d-block text-gray-dark">Meet your Match</strong></p>
		            <p>Our professional matchmakers work hard to analyze and find your potential candidates. Once ready, we will finally introduce you to your special match! </p>
		          </h6>
		        </div>
		    </div>

      		<div className="col-md-5">

      			<div id="signup" className="pt-4">
      				<h4>Make the First Move</h4>
      				{img(heartline.src, heartline.class)}
      				<p className="text-muted"><strong>Fill out your FREE profile below to get started.</strong></p>

      				<SignupForm />

				</div>
      		</div>


      	</Strip>

      	{/* ------------------------------------------------------ */}

      	<Strip color="blue" background="sunset-bg" heading="About Suncoast Singles">
			
			<div className="col-md-12">
	      		<p>At Suncoast Singles, we know that dating can be frustrating and overwhelming, but it doesn’t have to be! <br />We are very different from online dating. We meet with all our clients in person and do complete background checks. <br />Our matchmaking team is excited to meet you and find out what kind of person you are looking to meet.</p>
	      		<p>Our process works and we have MANY happy couples to prove it. With over 20 years of experience, thousands of great dates, numerous marriages, and happy relationships we can honestly say we have the experience required to help you find someone special.</p>
	      	</div>

	      	<div className="col-md-5">
      			<div className="media pt-3">
		          {img(heart.src, heart.class)}
		          <h6 className="media-body lh-125">
		            <strong className="d-block text-gray-dark">We are 100% safe, we meet with everyone in person and do criminal background checks.</strong> 
		          </h6>
		        </div>
		        <div className="media pt-3">
		          {img(heart.src, heart.class)}
		          <h6 className="media-body lh-125">
		            <strong className="d-block text-gray-dark">We are so much more than a dating service, our well rounded programs service the whole individual.</strong> 
		          </h6>
		        </div>
      		</div>

      		<div className="col-md-5">
      			<div className="media pt-3">
		          {img(heart.src, heart.class)}
		          <h6 className="media-body lh-125">
		            <strong className="d-block text-gray-dark">We are selective, we don't let players into our program..</strong> 
		          </h6>
		        </div>
		        <div className="media pt-3">
		          {img(heart.src, heart.class)}
		          <h6 className="media-body lh-125">
		            <strong className="d-block text-gray-dark">Our state-of-the-art image consulting finds what real men and women are attracted to.</strong> 
		          </h6>
		        </div>
		        
		    </div>

		    <div className="col-md-6 offset-md-3 mt-5">
		    	<div className="row justify-content-between">
		    		<a className="col-md-5 btn btn-yellow" role="button">Learn About Us</a>
		    		<a className="col-md-5 btn btn-lite" role="button">Why Us?</a>
		    		
		    	</div>
		    </div>

      	</Strip>

      	{/* ------------------------------ */}

      	<Strip color="white" heading="Our Success Stories" subheading="The best preparation for tomorrow is doing your best today">

      		<div className="col-md-4">
      			<div className="card">
				  {img(testimonial1.src, testimonial1.class)}
				  <div className="card-body">
				    <h5 className="card-title">Christopher from Naples</h5>
				    <p className="card-text text-muted">Bill, I just wanted to shoot you an email and let you know things are still going great with Mary! Take me off the market! I am really starting to enjoy life and all that comes from having an amazing lady to salsa with... </p>
				    <a href="#" className="btn btn-lite" role="button">Read more</a>
				  </div>
				</div>
      		</div>

      		<div className="col-md-4">
      			<div class="card">
				  {img(testimonial2.src, testimonial2.class)}
				  <div className="card-body">
				    <h5 className="card-title">Adrienne from Winter Park</h5>
				    <p className="card-text text-muted">Bill, Jim was much more open than all previous matches, and appears to be honest and compassionate too! We were together for 4 hours in the restaurant and we both exchanged telephone numbers...</p>
				    <a href="#" className="btn btn-lite" role="button">Read more</a>
				  </div>
				</div>
      		</div>

      		<div className="col-md-4">
      			<div class="card">
				  {img(testimonial3.src, testimonial3.class)}
				  <div className="card-body">
				    <h5 className="card-title">Amber from Ocala</h5>
				    <p className="card-text text-muted">Bill, Steve was nice and had a great smile. I did enjoy our dinner conversation-we talked for over 90 minutes. I would like to see him again and will definitely go out with him again...</p>
				    <a href="#" className="btn btn-lite" role="button">Read more</a>
				  </div>
				</div>
      		</div>

      	</Strip>


	    {/* ------------------------------ */}

	    <Strip color="white" background="heartsky-bg" heading="Take our Relationship Questionnaire today" subheading="To get started today, simply complete our Relationship Questionnaire. Once your registration is confirmed, we'll start sending your compatible matches!">
	    	
	    	<h4 class="mb-5 col-md-12">(941) 713-1000 | (800) 833-1995</h4>	
      		<div className="col-md-6 offset-md-3">
				<div className="row justify-content-between">	      		 
      		 		<a href="#" className="col-md-6 btn btn-yellow">Find my matches today</a>
      		 		<a href="#" className="col-md-5 btn btn-lite">Read our blogs</a>
      			</div>
      		</div>

	    </Strip>

	    {/* ------------------------------ */}

      </main>
    );
  }
}

export default Home;
