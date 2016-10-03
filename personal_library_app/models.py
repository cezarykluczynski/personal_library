from django.db import models


class Book(models.Model):
    book_id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=255)
    original_title = models.CharField(max_length=255)
    print_date = models.DateField(null=True)
    owned = models.BooleanField(default=False)
    wanted = models.BooleanField(default=False)
    read = models.BooleanField(default=False)
