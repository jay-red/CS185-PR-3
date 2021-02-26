import React, { Component } from 'react';
import ReactDOM from "react-dom"
import '../css/global.css';
import '../css/email.css';

class EmailPage extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			emailValue: '',
			message: -1,
			color: "#00FF00"
		};
		this.handleSubmit = this.handleSubmit.bind( this );
		this.handleChange = this.handleChange.bind( this );
		this.validateEmail = this.validateEmail.bind( this );
		this.getColor = this.getColor.bind( this );
	}

	validateEmail() {
		if( this.state.emailValue != undefined && this.state.emailValue != null && this.state.emailValue.trim() != "" ) {
			var email = this.state.emailValue;
			if( email.length > 4 ) {
				var domain = email.substring( email.length - 4 ).toLowerCase();
				if( domain == ".com" || domain == ".edu" ) {
					return email.indexOf( '@' ) != -1;
				}
			}
		}
		return false;
	}

	handleChange( evt ) {
		this.setState( {
			emailValue : evt.target.value
		} );
	}

	handleSubmit( evt ) {
		evt.preventDefault( true );
		if( this.validateEmail() ) {
			this.setState( {
				message : 0
			} );
			return;
		}
		this.setState( {
			message : 1
		} );
	}

	getColor() {
		return { color : this.state.message == 0 ? "#00FF00" : "#FF0000" };
	}

	render() {
		return (
			<div id="content">
				<h1>Email Validator</h1>
				<form method="GET" action="./text.html" id="email-form" onSubmit={this.handleSubmit}>
					<label>
						Email
						<br/>
						<input type="text" name="email" id="email" placeholder="Email address..." onChange={this.handleChange} />
					</label>
					<br/>
					<br/>
					<input type="submit" value="Validate" />
				</form>
				<br/>
				<div id="message-box" class={this.state.message < 0 ? "hide" : "show"} style={this.getColor()}>{ this.state.message == 0 ? "Email successfully recorded" : "Invalid email address." }</div>
			</div>
		)
	}
}

export default EmailPage;