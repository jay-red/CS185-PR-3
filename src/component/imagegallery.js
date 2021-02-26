import React, { Component } from 'react';
import ReactDOM from "react-dom"
import ImageItem from './imageitem';
import '../css/global.css';
import '../css/images.css';

class ImageGallery extends Component {

	constructor( props ) {
		super( props );
		this.state = {
			scrollToTop: false,
			lightbox: false,
			lightboxInner: "lightbox-item item-1"
		}
		this.handleScroll = this.handleScroll.bind( this );
		this.handleScrollTop = this.handleScrollTop.bind( this );
		this.handleMouseDown = this.handleMouseDown.bind( this );
		this.handleLightboxInteract = this.handleLightboxInteract.bind( this );
		this.handleImageClick = this.handleImageClick.bind( this );
		this.gallery = this.gallery.bind( this );
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

	handleLightboxInteract( clientX, clientY ) {
		var MIN_X, MAX_X, MIN_Y, MAX_Y;
		if( window.innerWidth > window.innerHeight ) {
		 	MIN_X = ( window.innerWidth - window.innerHeight * 0.9 ) / 2.0;
		 	MAX_X = ( window.innerWidth - window.innerHeight * 0.9 ) / 2.0 + window.innerHeight * 0.9;
		 	MIN_Y = window.innerHeight * 0.05;
		 	MAX_Y = window.innerHeight * 0.95;
		} else {
			MIN_X = window.innerWidth * 0.05;
			MAX_X = window.innerWidth * 0.95;
			MIN_Y = ( window.innerHeight - window.innerWidth * 0.9 ) / 2.0;
			MAX_Y = ( window.innerHeight - window.innerWidth * 0.9 ) / 2.0 + window.innerWidth * 0.9;
		}
		if( ( clientX < MIN_X || clientX > MAX_X ) || ( clientY < MIN_Y || clientY > MAX_Y ) ) {
			this.setState( {
				lightbox : false
			} );
		}
	}

	handleMouseDown( evt ) {
		this.handleLightboxInteract( evt.clientX, evt.clientY );
	}

	handleImageClick( evt ) {
		this.setState( {
			lightbox: true,
			lightboxInner: evt.target.className.replace( "gallery-item ", "lightbox-item " ).trim()
		} );
	}

	gallery() {
		const tabs = [
			"item-1",
			"item-2",
			"item-3",
			"item-4",
			"item-5",
			"item-6",
			"item-7"
		]

		return tabs.map( ( tab ) => {
			return( <ImageItem item={tab} cl={this.handleImageClick}/> );
		} );
	}

	render() {
		return (
			<div>
				<div id="lightbox-background" class={this.state.lightbox ? "show" : "hide"}>
				</div>
				<div id="lightbox-overlay" class={this.state.lightbox ? "show" : "hide"} onMouseDown={this.handleMouseDown}>
					<div id="lightbox-item">
						<div id="lightbox-inner" class={this.state.lightboxInner}>
						</div>
					</div>
				</div>
				<div id="content">
					<div id="header">
						<h1>Gallery</h1>
					</div>
					<div id="gallery">
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

export default ImageGallery;