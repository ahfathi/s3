from django.shortcuts import render
from django.views.generic import TemplateView
from django.http import JsonResponse
from django.urls import reverse
from django.contrib.auth.decorators import login_required
from django.contrib.auth import get_user_model
from .models import News, NewsComment, Game, League
from django.db.models import Q
from django.utils import timezone
import json


# Create your views here.
class Index(TemplateView):
    template_name = 'index.html'
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        return context

def get_news_feed(request):
    page = int(request.GET.get('page', 1))
    limit = int(request.GET.get('limit', 10))
    news_feed = News.objects.order_by('-date')[(page-1)*limit:page*limit]
    items = []
    for news in news_feed:
        items.append({
            'id': news.id,
            'title': news.title,
            'text': news.preview,
            'image': news.cover.url if news.cover else '',
            'comments': news.comments_count,
            'views': news.views_count,
        })

    return JsonResponse(json.dumps(items), safe=False)

def get_news(request, id):
    try:
        news = News.objects.get(pk=id)
    except:
        return JsonResponse({'error': 'no such news'})
    else:
        comments = NewsComment.objects.filter(news=news).order_by('-date_created')

    result = {'comments': [], 'data': {}}
    for comment in comments:
        result['comments'].append({'nickname': comment.user.nickname, 'avatar': comment.user.avatar.url, 'date': comment.date_created.strftime("%Y-%m-%d"), 'content': comment.content})
    result['data'] = {
        'title': news.title,
        'cover': news.cover.url if news.cover else '',
        'content': news.content,
        'date': news.date.strftime("%Y-%m-%d"),
        'source': news.source,
        'tags': [tag.text for tag in news.tags.all()],
        'username': '',
    }
    if request.user.is_authenticated:
        result['data']['username'] = request.user.username

    
    return JsonResponse(json.dumps(result), safe=False)


@login_required
def comment(request):
    if request.method != 'POST':
        return JsonResponse({'error': 'invalid request method'})
    try:
        username = request.POST['username']
        content = request.POST['content']
        news_id = request.POST['news-id']
    except:
        return JsonResponse({'error': 'invalid form data'})
    
    try:
        User = get_user_model()
        user = User.objects.get(username=username)
    except:
        return JsonResponse({'error': 'no such user'})
    
    try:
        news = News.objects.get(pk=news_id)
    except:
        return JsonResponse({'error': 'no such news'})
    
    NewsComment.objects.create(user=user, news=news, content=content)
    return JsonResponse({'success': 'comment inserted'})

def get_scores(request):
    page = int(request.GET.get('page', 1))
    limit = int(request.GET.get('limit', 10))
    q = request.GET.get('q', 'all')
    if q == 'all':
        games = Game.objects.order_by('-date')
    elif q == 'interested':
        if request.user.is_authenticated:
            interested_teams = request.user.interests.all()
            games = Game.objects.filter(Q(home_team__in=interested_teams) | Q(away_team__in=interested_teams)).order_by('-date')
        else:
            return JsonResponse({'error': 'please log in first'})
    games = games[(page-1)*limit:page*limit]
    scores = []
    for game in games:
        scores.append({
            'home_team_name': game.home_team.name,
            'away_team_name': game.away_team.name,
            'home_team_logo': game.home_team.logo.url,
            'away_team_logo': game.away_team.logo.url,
            'home_team_page_url': '#',
            'away_team_page_url': '#',
            'home_team_goals': game.home_team_goals,
            'away_team_goals': game.away_team_goals,
            'is_started': True if game.date < timezone.now() else False,
            'match_date': game.date.strftime("%Y-%m-%d"),
            'match_time': game.date.strftime("%H:%M"),
            'game_page_url': '#'
        })
        
    return JsonResponse(json.dumps(scores), safe=False)

def get_leagues(request):
    leagues = League.objects.all()
    items = []
    for league in leagues:
        items.append({
            'id': league.pk,
            'name': league.name,
            'logo': league.logo.url
        })
    return JsonResponse(json.dumps(items), safe=False)

def get_player(request):
    params = request.GET
    id = params.get('id')
    season = params.get('season')
    league = params.get('league')
    if league is None or id is None or season is None:
        return JsonResponse({'error': "no league/id/season defined"})
    player_info = Player.objects.get(pk=id)
    player_performance = player_info.performances.filter(Q(team_league_season__league__name=league) & Q(team_league_season__season=season))
    try:
        return JsonResponse({
            'name': player_info.name,
            'age': player_info.age,
            'height': player_info.height,
            'weight': player_info.weight,
            'image': player_info.image
        })
    except:
        return JsonResponse({
            'error': 'no such player'
        })