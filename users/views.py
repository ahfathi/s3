from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.auth import authenticate, login
from django.middleware.csrf import get_token
from django.contrib.auth import get_user_model

# Create your views here.

def get_csrf(request):
    return JsonResponse({'csrfmiddlewaretoken': get_token(request)})

def user_login(request):
    if request.method != 'POST':
        return JsonResponse({'error': 'invalid request method'})
    try:
        username = request.POST['username']
        password = request.POST['password']
    except:
        return JsonResponse({'error': 'invalid form data'})
    
    user = authenticate(username=username, password=password)
    if user is None:
        return JsonResponse({'error': 'authentication failed'})

    login(request, user)
    return JsonResponse({'success': 'user loged in'})

def user_register(request):
    if request.method != 'POST':
        return JsonResponse({'error': 'invalid request method'})
    try:
        username = request.POST['username']
        email = request.POST['email']
        password = request.POST['password']
    except:
        return JsonResponse({'error': 'invalid form data'})