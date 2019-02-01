# Generated by Django 2.1.5 on 2019-02-01 14:46

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('football', '0011_auto_20190201_1444'),
    ]

    operations = [
        migrations.RenameField(
            model_name='game',
            old_name='away_team_league_season',
            new_name='away_team',
        ),
        migrations.RenameField(
            model_name='game',
            old_name='home_team_league_season',
            new_name='home_team',
        ),
        migrations.AlterUniqueTogether(
            name='game',
            unique_together={('home_team', 'away_team', 'league', 'season')},
        ),
    ]