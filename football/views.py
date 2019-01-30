from django.shortcuts import render
from django.views.generic import TemplateView
from django.http import JsonResponse
from django.urls import reverse
from django.contrib.auth.decorators import login_required
from django.contrib.auth import get_user_model
from .models import News, NewsComment
from django.core.serializers.json import DjangoJSONEncoder
import json


# Create your views here.
class Index(TemplateView):
    template_name = 'index.html'
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        return context

def get_news_subnav_items(request):
    items = [
        {
            'text': 'آخرین اخبار',
            'url': '/',
        }
    ]
    if request.user.is_authenticated:
        items.append({
            'text': 'مورد علاقه ها',
            'url': '/interested',
        })
    items += [
        {
            'text': 'بازی ها',
            'url': '/games',
        },
        {
            'text': 'لیگ ها',
            'url': '/leagues',
        }
    ]
    return JsonResponse(json.dumps(items), safe=False)

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
        comments = NewsComment.objects.filter(news=news)

    result = {'comments': [], 'data': {}}
    for comment in comments:
        result['comments'].append({'nickname': comment.user.nickname, 'avatar': comment.user.avatar.url, 'date': comment.date_created, 'content': comment.content})
    result['data'] = {
        'title': news.title,
        'cover': news.cover.url if news.cover else '',
        'content': news.content,
        'date': news.date,
        'source': news.source,
        'tags': [tag.text for tag in news.tags.all()],
        'username': '',
    }
    if request.user.is_authenticated:
        result['data']['username'] = request.user.username
    
    return JsonResponse(json.dumps(result, cls=DjangoJSONEncoder), safe=False)

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
