import React from 'react'
import { Link } from 'react-router'

export default class Dashboard extends React.Component {
	render() {
		return (
			<ul>
				<li><Link to="/books">Books</Link></li>
				<li><Link to="/authors">Authors</Link></li>
				{this.props.children}
			</ul>
		);
	}
}
