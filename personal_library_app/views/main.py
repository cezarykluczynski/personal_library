from django.shortcuts import render

from personal_library_app.models import Book


def index(request):
	return render(request, "main/index.html")
