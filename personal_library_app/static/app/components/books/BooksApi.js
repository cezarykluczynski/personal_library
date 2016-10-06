export default class BooksApi {

	getPage(number) {
		return fetch(`/api/books/`)
			.then(result => {
				return result.json().then(result => {
					return result.results;
				});
			});
	}
}
