import React from "react"
import ReactDOM from "react-dom"
import '../css/global.css';

function SignupPage() {
	return (
		<div id="content">
			<h1>Beta Test Sign-up</h1>
			<form method="GET" action="./text.html">
				<label>
					Minecraft Username
					<br/>
					<input type="text" name="fname" id="fname" placeholder="Minecraft username..." />
				</label>
				<br/>
				<br/>
				<label>
					Discord ID
					<br/>
					<input type="text" name="lname" id="lname" placeholder="Discord ID..." />
				</label>
				<br/>
				<p>How did you find out about this project?</p>
				<label>
					<input type="radio" name="refer" value="reddit" />&nbsp;Reddit
					<br/>
					<input type="radio" name="refer" value="youtube" />&nbsp;YouTube
					<br/>
					<input type="radio" name="refer" value="twitter" />&nbsp;Twitter
				</label>
				<br/>
				<br/>
				<input type="submit" value="Sign-up" />
			</form>
		</div>
	)
}

export default SignupPage;