from django.contrib import admin
from .models import CustomUser
from django.contrib.auth.admin import UserAdmin

# Register your models here.

class CustomUserAdmin(UserAdmin):
    model = CustomUser
    list_display = ['username', 'email']
    add_fieldsets = (
        (None, {'fields': ('username', 'email', 'password1', 'password2')}),
    )
    fieldsets = (
        (None, {'fields': ('username', 'email')}),
        ('Personal info', {'fields': ('nickname', 'avatar')}),
        UserAdmin.fieldsets[2],
    )

admin.site.register(CustomUser, CustomUserAdmin)
