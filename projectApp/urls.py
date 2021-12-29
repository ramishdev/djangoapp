from django.urls import path,include
from rest_framework.urlpatterns import format_suffix_patterns
from . import views
from rest_framework.routers import DefaultRouter
from rest_framework.urlpatterns import format_suffix_patterns

router = DefaultRouter()
router.register(r'Item', views.ItemListViews)
router.register(r'User', views.UserListViews)

#router.include_format_suffixes = False

urlpatterns = [
    path('', include(router.urls)),
]

#urlpatterns = format_suffix_patterns(urlpatterns,allowed=['html'])