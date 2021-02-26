import React, { Component } from 'react';
import ReactDOM from "react-dom"
import '../css/global.css';
import '../css/images.css';

class ImageGallery extends Component {

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
		return (
			<div>
				<div id="lightbox-background" class="hide">
				</div>
				<div id="lightbox-overlay" class="hide">
					<div id="lightbox-item">
						<div id="lightbox-inner" class="lightbox-item item-1">
						</div>
					</div>
				</div>
				<div id="content">
					<div id="header">
						<h1>Gallery</h1>
					</div>
					<div id="gallery">
						<div class="gallery-item item-1"></div>
						<div class="gallery-item item-2"></div>
						<div class="gallery-item item-3"></div>
						<div class="gallery-item item-4"></div>
						<div class="gallery-item item-5"></div>
						<div class="gallery-item item-6"></div>
						<div class="gallery-item item-7"></div>
						<div class="gallery-item item-8"></div>
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