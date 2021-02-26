import React from "react"
import ReactDOM from "react-dom"
import '../css/global.css';
import '../css/email.css';

function EmailPage() {
	return (
		<div id="content">
			<h1>Email Validator</h1>
			<form method="GET" action="./text.html" id="email-form">
				<label>
					Email
					<br/>
					<input type="text" name="email" id="email" placeholder="Email address..." />
				</label>
				<br/>
				<br/>
				<input type="submit" value="Validate" />
			</form>
			<br/>
			<div id="message-box" class="hide"></div>
		</div>
	)
}

export default EmailPage;