# Generated by Django 2.1.5 on 2019-02-01 14:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('football', '0009_auto_20190201_1422'),
    ]

    operations = [
        migrations.AlterField(
            model_name='game',
            name='date',
            field=models.DateTimeField(),
        ),
    ]