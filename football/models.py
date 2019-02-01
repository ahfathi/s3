from django.db import models
from froala_editor.fields import FroalaField
from django.core.validators import MaxValueValidator, MinValueValidator
from django.conf import settings

import os

# Create your models here.

def get_news_image_path(instance, filename):
    return f'images/news-cover/{instance.id}{os.path.splitext(filename)[1]}'


class News(models.Model):
    title = models.CharField(max_length=64, unique=True)
    preview = models.CharField(max_length=256)
    content = FroalaField()
    cover = models.ImageField(upload_to=get_news_image_path)
    date = models.DateTimeField(auto_now_add=True)
    source = models.CharField(max_length=16)
    comments_count = models.IntegerField(default=0)
    views_count = models.IntegerField(default=0)

    def __str__(self):
        return f'[{self.pk}] {self.title}'


class NewsTag(models.Model):
    news = models.ForeignKey(News, related_name='tags', on_delete=models.CASCADE)
    text = models.CharField(max_length=16)

class NewsComment(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    news = models.ForeignKey(News, on_delete=models.CASCADE)
    content = models.TextField()
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.content[:16]

class League(models.Model):
    name = models.CharField(max_length=32)
    logo = models.ImageField(upload_to='images/leagues/')

    def __str__(self):
        return f'[{self.pk}] {self.name}'

class Team(models.Model):
    name = models.CharField(max_length=32)
    logo = models.ImageField(upload_to='images/teams/')
    is_club = models.BooleanField()
    leagues = models.ManyToManyField(League, through='TeamLeagueSeason', related_name='teams', symmetrical=False)
    news = models.ManyToManyField(News, related_name='teams', null=True, blank=True)

    def __str__(self):
        return f'[{self.pk}] {self.name}'

class TeamLeagueSeason(models.Model):
    team = models.ForeignKey(Team, related_name='league_seasons', on_delete=models.CASCADE)
    league = models.ForeignKey(League, related_name='team_seasons', on_delete=models.CASCADE)
    season = models.CharField(max_length=16)

    games_played = models.IntegerField(default=0)
    wins = models.IntegerField(default=0)
    draws = models.IntegerField(default=0)
    losses = models.IntegerField(default=0)
    goals_for = models.IntegerField(default=0)
    goals_against = models.IntegerField(default=0)
    goal_difference = models.IntegerField(default=0)
    points = models.IntegerField(default=0)

    class Meta:
        unique_together = (('team', 'league', 'season'),)

class Player(models.Model):
    name = models.CharField(max_length=32)
    age = models.IntegerField()
    height = models.IntegerField()
    weight = models.IntegerField()
    image = models.ImageField(upload_to='images/players/')

    def __Str__(self):
        return f'[{self.pk}] {self.name}'

class Performance(models.Model):
    player = models.ForeignKey(Player, related_name='performances', on_delete=models.CASCADE)
    team_league_season = models.ForeignKey(TeamLeagueSeason, related_name='performances', on_delete=models.CASCADE)

    position = models.CharField(max_length=16)
    appearances = models.IntegerField(default=0)
    goals = models.IntegerField(default=0)
    assists = models.IntegerField(default=0)
    shots = models.IntegerField(default=0)
    shots_on_target = models.IntegerField(default=0)
    saves = models.IntegerField(default=0)
    fouls = models.IntegerField(default=0)
    yellow_cards = models.IntegerField(default=0)
    red_cards = models.IntegerField(default=0)

    class Meta:
        unique_together = (('player', 'team_league_season'),)

class Game(models.Model):
    home_team = models.ForeignKey(Team, related_name='home_games', on_delete=models.CASCADE)
    away_team = models.ForeignKey(Team, related_name='away_games', on_delete=models.CASCADE)
    league = models.ForeignKey(League, related_name='games', on_delete=models.CASCADE)
    season = models.CharField(max_length=16)

    home_team_goals = models.IntegerField(default=0)
    away_team_goals = models.IntegerField(default=0)
    home_team_fouls = models.IntegerField(default=0)
    away_team_fouls = models.IntegerField(default=0)
    home_team_corners = models.IntegerField(default=0)
    away_team_corners = models.IntegerField(default=0)
    home_team_substitutions = models.IntegerField(default=0)
    away_team_substitutions = models.IntegerField(default=0)
    home_team_possesion = models.IntegerField(default=50, validators=[MinValueValidator(0), MaxValueValidator(100)])
    away_team_possesion = models.IntegerField(default=50, validators=[MinValueValidator(0), MaxValueValidator(100)])
    date = models.DateTimeField()
    is_finished = models.BooleanField(default=False)
    report = models.TextField(blank=True)

    def __str__(self):
        return f'[{self.pk}] [{self.date.strftime("%Y-%m-%d")}] {self.home_team.name} - {self.away_team.name}'

    class Meta:
        unique_together = (('home_team', 'away_team', 'league', 'season'))