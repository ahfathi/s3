from django.db import models
from django.contrib.auth.models import AbstractUser

import os

# Create your models here.

def get_avatar_path(instance, filename):
    return f'images/avatars/{instance.id}{os.path.splitext(filename)[1]}'

class CustomUser(AbstractUser):
    avatar = models.ImageField(upload_to=get_avatar_path, default='images/avatars/default_user.svg')
    email = models.EmailField(unique=True)
    nickname = models.CharField(max_length=32, default='guest')

