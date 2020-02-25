import React, { Component } from 'react';
import CardList from './components/CardList.js';
import SearchBox from './components/SearchBox.js';
import Scroll from './Scroll.js';
import './App.css';
import 'tachyons';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			robots: [],
			searchfield: ''
		};
	}

	async componentDidMount() {
		const response = await fetch('https://jsonplaceholder.typicode.com/users')
			const json = await response.json()
			this.setState({ robots: json });
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value });
	};

	render() {
		
		const filteredRobots = this.state.robots.filter((robot) => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		});

		if (this.state.robots.length === 0) {
			return <h2 className="tc"> Loading ...</h2>;
		} else {
			return (
				<div className='tc'>
					<h1 className='title'>RobotsFriends</h1>
					<SearchBox searchChange={this.onSearchChange} />
					<Scroll>
						<CardList robots={filteredRobots} />
					</Scroll>
				</div>
			);
		}
	}
}

export default App;