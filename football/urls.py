from django.urls import path
from . import views

app_name = 'football'

urlpatterns = [
    path('api/get_news_subnav_items', views.get_news_subnav_items, name='get_news_subnav_items'),
    path('api/news_feed', views.get_news_feed, name='get_news_feed'),
    path('api/news/<int:id>', views.get_news, name='get_news'),
    path('api/comment', views.comment, name='comment'),
]