from django.contrib import admin
from .models import Book

# Register your submodels here.

admin.autodiscover()

admin.site.register(Book)