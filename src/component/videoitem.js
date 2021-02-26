import React, { Component } from 'react';
import ReactDOM from "react-dom"
import '../css/global.css';
import '../css/images.css';

function VideoItem( props ) {

	return (
		<div class="gallery-video-item">
			<video src={props.vid.default} onClick={props.cl} />
		</div>
	)

}

export default VideoItem;