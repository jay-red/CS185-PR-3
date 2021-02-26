import './App.css';

import Body from './component/body'
import Navbar from './component/navbar'
import { Component } from 'react';

class App extends Component {
	constructor() {
		super();
		this.state = {
			active: 1
		};
		this.changetab = ( id ) => {
			this.setState( {
				active: id
			} );
		};
	}

	render() {
		const tabs = [
			{
				id: 1,
				title: 'Home'
			},
			{
				id: 2,
				title: 'Text'
			},
			{
				id: 3,
				title: 'Images'
			},
			{
				id: 4,
				title: 'Videos'
			},
			{
				id: 5,
				title: 'Table'
			},
			{
				id: 6,
				title: 'Email'
			}
		]

		return (
			<div className="App">
				<div id="navbar">
					<Navbar tabs={tabs} activetab={this.state.active} ctab={this.changetab}/>
				</div>
				<Body activetab={this.state.active}/>
			</div>
		);
	}
}

export default App;