import React, { Component } from 'react';

function NavbarItem( props ) {
	const isActive = props.out.id == props.activetab;

	const addstyle = () => {
		if( isActive ) {
			return { backgroundColor: 'red' }
		} else {
			return { backgroundColor: 'yellow' }
		}
	};

	console.log( props );

	return (
		<div class={isActive ? 'navbar-item highlighted' : 'navbar-item'} onClick={props.ctab.bind(this,props.out.id)}>
			{props.out.title}
		</div>
	);
}

export default NavbarItem;