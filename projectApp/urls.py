from django.urls import path,include
from rest_framework.urlpatterns import format_suffix_patterns
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'Item', views.ItemListViews)
router.register(r'User', views.UserListViews)


urlpatterns = [
    path('', include(router.urls)),
]
