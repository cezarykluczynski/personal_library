import React from 'react'
import BooksApi from './BooksApi.js'
import Book from './Book.jsx'
import R from 'ramda'

export default class Books extends React.Component {

	constructor() {
		super();
		this.state = {
			books: []
		};
	}

	getBooks() {
		return R.map(book => <Book book={book} key={book.url} />)(this.state.books);
	}

	render() {
		return (
			<div>
				<table className="ui celled table">
					<thead>
						<tr>
							<th>Title</th>
							<th>Original title</th>
							<th>Print date</th>
						</tr>
					</thead>
					<tbody>
						{this.getBooks()}
					</tbody>
				</table>
			</div>
		);
	}

	componentDidMount() {
		let booksApi = new BooksApi();
		booksApi.getPage(0).then(books => {
			this.setState({
				books: books
			});
		})
	}
}
