  
from django.urls import path
from core import views as v


app_name = 'core'


urlpatterns = [
    path('', v.index, name='index'),
    path('api/users/', v.api_users, name='api_users'),
    
]