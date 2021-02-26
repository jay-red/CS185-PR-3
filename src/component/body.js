import React, { Component } from 'react';
//import VideoData from './page1';
import HomePage from './home';
import SignupPage from './signup';
import ImageGallery from './imagegallery';
import VideoGallery from './videogallery';
import TablePage from './table';
import EmailPage from './email';
import '../css/global.css';

class Body extends Component {
	render() {
		var displaycontent = () => {
			var activetab = this.props.activetab;
			if( activetab == 2 ) {
				//return <Imagedata/>
				return <SignupPage/>
			} else if( activetab == 3 ) {
				//return <Imagedata/>
				return <ImageGallery/>
			} else if( activetab == 4 ) {
				//return <Imagedata/>
				return <VideoGallery/>
			} else if( activetab == 5 ) {
				//return <Imagedata/>
				return <TablePage/>
			} else if( activetab == 6 ) {
				//return <Imagedata/>
				return <EmailPage/>
			} else {
				return <HomePage/>
			}
		};

		return( displaycontent() );
	}
}

export default Body;