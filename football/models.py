from django.db import models
from froala_editor.fields import FroalaField
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
        return f'[{self.id}] {self.title}'

class NewsTag(models.Model):
    news = models.ForeignKey(News, related_name='tags', on_delete=models.CASCADE)
    text = models.CharField(max_length=16)

class NewsComment(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    news = models.ForeignKey(News, on_delete=models.CASCADE)
    content = models.TextField()
    date_created = models.DateTimeField(auto_now_add=True)
