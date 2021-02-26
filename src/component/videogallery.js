import React, { Component } from 'react';
import ReactDOM from "react-dom"
import VideoItem from './videoitem';
import '../css/global.css';
import '../css/videos.css';

class VideoGallery extends Component {

	constructor( props ) {
		super( props );
		this.state = {
			scrollToTop: false,
			lightbox: false,
			lightboxInnerVid: null
		}
		this.handleScroll = this.handleScroll.bind( this );
		this.handleScrollTop = this.handleScrollTop.bind( this );
		this.handleMouseDown = this.handleMouseDown.bind( this );
		this.handleLightboxInteract = this.handleLightboxInteract.bind( this );
		this.handleVideoClick = this.handleVideoClick.bind( this );
		this.gallery = this.gallery.bind( this );
	}

	componentDidMount() {
		document.addEventListener( "scroll", this.handleScroll );
		this.setState( {
			lightboxInnerVid: document.getElementById( "lightbox-inner" )
		} );
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

	handleLightboxInteract( clientX, clientY ) {
		var MIN_X, MAX_X, MIN_Y, MAX_Y;
		MIN_X = 0.05 * window.innerWidth;
		MAX_X = 0.95 * window.innerWidth;
		MIN_Y = 0.05 * window.innerHeight;
		MAX_Y = 0.95 * window.innerHeight;
		if( ( clientX < MIN_X || clientX > MAX_X ) || ( clientY < MIN_Y || clientY > MAX_Y ) ) {
			this.setState( {
				lightbox : false
			} );
			this.state.lightboxInnerVid.pause();
		}
	}

	handleMouseDown( evt ) {
		this.handleLightboxInteract( evt.clientX, evt.clientY );
	}

	handleVideoClick( evt ) {
		this.setState( {
			lightbox: true
		} );
		var video = evt.target;
		this.state.lightboxInnerVid.src = evt.target.src;
	}

	gallery() {
		const videos = [
			require( "../assets/1.mp4" ),
			require( "../assets/2.mp4" ),
			require( "../assets/3.mp4" ),
			require( "../assets/4.mp4" ),
			require( "../assets/5.mp4" ),
			require( "../assets/6.mp4" ),
			require( "../assets/7.mp4" )
		]

		return videos.map( ( video ) => {
			return( <VideoItem vid={video} cl={this.handleVideoClick}/> );
		} );
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
				<div id="lightbox-video-background" class={this.state.lightbox ? "show" : "hide"}>
				</div>
				<div id="lightbox-video-overlay" class={this.state.lightbox ? "show" : "hide"} onMouseDown={this.handleMouseDown}>
					<div id="lightbox-video-item">
						<video id="lightbox-inner" src="./assets/1.mp4" controls />
					</div>
				</div>
				<div id="content">
					<div id="header">
						<h1>Trailers</h1>
					</div>
					<div id="gallery-video">
						{this.gallery()}
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