import React from 'react';
import Header from './header/Header.jsx';
import Books from './books/Books.jsx';

export default class App extends React.Component {
	render() {
		return (
			<div>
				<Header/>
				<Books/>
			</div>
		);
	}
}
