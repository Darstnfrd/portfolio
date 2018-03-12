import React, { Component } from 'react';

class SignupForm extends Component {
  render() {

  	return (

  		<form>
			<div class="form-row form-group">
				<div className="col">
			    	<input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name*" />
			    </div>
			  	<div className="col">
			    	<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Phone" />
			  	</div>
		  	</div>

		  	<div class="form-row form-group">
			  	<div className="col">
			    	<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email Address*" />
			  	</div>
		  	</div>

		  	<div className="form-row form-group">
		  		<div className="col">
		    		<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Create a Password*" />
		    	</div>
		    </div>

		    <div className="form-row mb-5 form-group">
		    	<div className="col">
		    		<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Confirm Password*" />
		    	</div>
		  	</div>

		  	<div className="form-row form-group">
		  		<div className="col col-md-6">
			    	<select id="inputState" class="form-control">
				        <option selected>Gender</option>
				        <option>Male</option>
				        <option>Female</option>
				        <option>Other</option>
			      	</select>
			  	</div>
		  		<div className="col col-md-6">
		    		<input type="date" className="form-control" id="exampleInputPassword1" placeholder="Date of Birth*" />
		    	</div>
		  	</div>

		  	<div class="form-row mb-5 form-group">
					<div className="col">
			    	<input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="City*" />
			    </div>
			  	<div className="col">
			    	<input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Zipcode*" />
			  	</div>
		  	</div>

		  	<div className="form-row form-group">
		  		<div className="col">
			  		<select id="inputState" class="form-control">
				        <option selected>I am seeking a...</option>
				        <option>Male</option>
				        <option>Female</option>
				        <option>Other</option>
			      	</select>
				</div>
		  	</div>

		  	<div class="form-row form-group">
			  	<div className="col">
			    	<select id="inputState" class="form-control">
				        <option selected>Select your relationship goal</option>
				        <option>Serious relationship</option>
				        <option>Casual relationship</option>
				        <option>Marriage</option>
			      	</select>
			  	</div>
		  	</div>

		  	<div className="form-row form-group form-check">
		  		<label className="form-check-label" for="exampleCheck1">Do you have children?*</label> <br />
		  		<div className="form-check form-check-inline">
				  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
				  <label className="form-check-label" for="inlineRadio1">Yes</label>
				</div>
				<div className="form-check form-check-inline">
				  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
				  <label className="form-check-label" for="inlineRadio2">No</label>
				</div>
				<div className="form-check form-check-inline">
				  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
				  <label className="form-check-label" for="inlineRadio3">Tell you later</label>
				</div>
		  	</div>

		  	<button type="submit" className="btn btn-lite btn-block">Sign Up</button>
		
		</form>

  		);
  }
}

export default SignupForm;