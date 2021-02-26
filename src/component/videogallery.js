import React, { Component } from 'react';
import ReactDOM from "react-dom"
import '../css/global.css';
import '../css/videos.css';

class VideoGallery extends Component {

	constructor( props ) {
		super( props );
		this.state = {
			scrollToTop: false
		}
		this.handleScroll = this.handleScroll.bind( this );
		this.handleScrollTop = this.handleScrollTop.bind( this );
	}

	componentDidMount() {
		document.addEventListener( "scroll", this.handleScroll );
	}

	componentWillUnmount() {
		document.removeEventListener( "scroll", this.handleScroll );
	}

	handleScroll() {
		this.setState( {
			scrollToTop : document.scrollingElement.scrollTop >= document.scrollingElement.scrollHeight * 0.25
		} );
	}

	handleScrollTop() {
		document.scrollingElement.scrollTop = 0;
	}

	render() {

		var video1 = require( "../assets/1.mp4" );
		var video2 = require( "../assets/2.mp4" );
		var video3 = require( "../assets/3.mp4" );
		var video4 = require( "../assets/4.mp4" );
		var video5 = require( "../assets/5.mp4" );
		var video6 = require( "../assets/6.mp4" );
		var video7 = require( "../assets/7.mp4" );

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
							<video src={video1.default} />
						</div>
						<div class="gallery-item">
							<video src={video2.default} />
						</div>
						<div class="gallery-item">
							<video src={video3.default} />
						</div>
						<div class="gallery-item">
							<video src={video4.default} />
						</div>
						<div class="gallery-item">
							<video src={video5.default} />
						</div>
						<div class="gallery-item">
							<video src={video6.default} />
						</div>
						<div class="gallery-item">
							<video src={video7.default} />
						</div>
					</div>
				</div>
				<div id="scroll-button" class={this.state.scrollToTop ? "show" : "hide"} onClick={this.handleScrollTop}>
					Scroll to Top
				</div>
			</div>
		)
	}
}

export default VideoGallery;