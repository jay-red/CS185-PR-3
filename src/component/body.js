import React, { Component } from 'react';
//import VideoData from './page1';
import HomePage from './home';
import ImageGallery from './imagegallery';
import './style.css';

class Body extends Component {
	render() {
		var displaycontent = () => {
			var activetab = this.props.activetab;
			if( activetab == 1 ) {
				//return <Videodata/>
				return <HomePage/>
			} else if( activetab == 2 ) {
				//return <Imagedata/>
				return <h1>wow 2</h1>
			} else {
				return <div className="text">page 3</div>
			}
		};

		return( displaycontent() );
	}
}

export default Body;