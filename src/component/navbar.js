import React, { Component } from 'react';
import NavbarItem from './navbaritem';

class Navbar extends Component {
	render() {
		console.log( "id is " + this.props.activetab );

		return (
			this.props.tabs.map( ( tab ) => {
				return( <NavbarItem out={tab} activetab={this.props.activetab} ctab={this.props.ctab}/> );
			} )
		);
	}
}

export default Navbar;