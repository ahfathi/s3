# Generated by Django 2.1.5 on 2019-01-30 08:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('football', '0005_newscomment_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='newscomment',
            name='content',
            field=models.TextField(default=''),
            preserve_default=False,
        ),
    ]