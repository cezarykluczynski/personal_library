import React from 'react'
import Books from './books/Books.jsx'
import Dashboard from './dashboard/Dashboard.jsx'
import Authors from './authors/Authors.jsx'
import render from 'react-dom'
import { Router, Route, Link } from 'react-router'
import { hashHistory } from 'react-router'

export default class App extends React.Component {
	render() {
		return (
			<Router history={hashHistory}>
				<Route path="/" component={Dashboard}>
					<Route path="/books" component={Books} />
					<Route path="/authors" component={Authors} />
				</Route>
			</Router>
		);
	}
}
