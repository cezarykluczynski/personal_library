from django.shortcuts import render

from personal_library_app.models import Book


def index(request):
	book = Book()
	book.book_id = 1
	book.first_name = 'a'
	book.save()
	return render(request, "books/index.html", {\
		'books': book\
		})
