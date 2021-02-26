import React from "react"
import ReactDOM from "react-dom"
import '../css/global.css';
import '../css/videos.css';

function VideoGallery() {
	return (
		<div>
			<div id="navbar">
				<a href="./index.html">
					<div class="navbar-item">
						Home
					</div>
				</a>
				<a href="./text.html">
					<div class="navbar-item">
						Text
					</div>
				</a>
				<a href="./images.html">
					<div class="navbar-item">
						Images
					</div>
				</a>
				<a href="./videos.html">
					<div class="navbar-item highlighted">
						Videos
					</div>
				</a>
				<a href="./table.html">
					<div class="navbar-item">
						Table
					</div>
				</a>
				<a href="./email.html">
					<div class="navbar-item">
						Email
					</div>
				</a>
			</div>
			<div id="lightbox-background" class="hide">
			</div>
			<div id="lightbox-overlay" class="hide">
				<div id="lightbox-item">
					<video id="lightbox-inner" src="./assets/1.mp4" controls />
				</div>
			</div>
			<div id="content">
				<div id="header">
					<h1>Trailers</h1>
				</div>
				<div id="gallery">
					<div class="gallery-item">
						<video src="./assets/1.mp4" />
					</div>
					<div class="gallery-item">
						<video src="./assets/2.mp4" />
					</div>
					<div class="gallery-item">
						<video src="./assets/3.mp4" />
					</div>
					<div class="gallery-item">
						<video src="./assets/4.mp4" />
					</div>
					<div class="gallery-item">
						<video src="./assets/5.mp4" />
					</div>
					<div class="gallery-item">
						<video src="./assets/6.mp4" />
					</div>
					<div class="gallery-item">
						<video src="./assets/7.mp4" />
					</div>
				</div>
			</div>
			<div id="scroll-button" class="hide">
				Scroll to Top
			</div>
		</div>
	)
}

export default VideoGallery;