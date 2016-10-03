# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Book',
            fields=[
                ('book_id', models.AutoField(primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=255)),
                ('original_title', models.CharField(max_length=255)),
                ('print_date', models.DateField(null=True)),
                ('owned', models.BooleanField(default=False)),
                ('wanted', models.BooleanField(default=False)),
                ('read', models.BooleanField(default=False)),
            ],
        ),
    ]
