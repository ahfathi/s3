# Generated by Django 2.1.5 on 2019-02-01 14:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('football', '0008_team_news'),
    ]

    operations = [
        migrations.AlterField(
            model_name='team',
            name='news',
            field=models.ManyToManyField(blank=True, null=True, related_name='teams', to='football.News'),
        ),
    ]
