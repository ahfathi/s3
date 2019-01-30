from django.contrib import admin
from django.forms import ModelForm, Textarea
from .models import News, NewsTag, NewsComment

# Register your models here.

class NewsTagInline(admin.StackedInline):
    model = NewsTag
    extra = 1

class NewsForm(ModelForm):
    class Meta:
        widgets = {
            'preview': Textarea(attrs={'dir': 'rtl'})
        }

class NewsAdmin(admin.ModelAdmin):
    form = NewsForm
    inlines = [NewsTagInline]

admin.site.register(News, NewsAdmin)
admin.site.register(NewsTag)
admin.site.register(NewsComment)