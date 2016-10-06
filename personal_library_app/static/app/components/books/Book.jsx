import React from 'react'

export default class Book extends React.Component {

	render() {
		return (
			<tr>
				<td>{this.props.book.title}</td>
				<td>{this.props.book.original_title}</td>
				<td>{this.props.book.print_date}</td>
			</tr>
		);
	}

}