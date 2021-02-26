import React, { Component } from 'react';
import ReactDOM from "react-dom"
import '../css/global.css';
import '../css/images.css';

function ImageItem( props ) {

	var cn = "gallery-item " + props.item; 

	return (
		<div class={cn} onClick={props.cl}></div>
	)

}

export default ImageItem;