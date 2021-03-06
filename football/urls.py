from django.urls import path
from . import views

app_name = 'football'

urlpatterns = [
    path('news_feed/', views.get_news_feed, name='get_news_feed'),
    path('news/<int:id>/', views.get_news, name='get_news'),
    path('news/<int:news_id>/comments/', views.get_comments, name='get_comments'),
    path('comment/', views.comment, name='comment'),
    path('get_scores/', views.get_scores, name='get_scores'),
    path('leagues/', views.get_leagues, name='get_leagues'),
    path('player/', views.get_player, name="get_player"),
]