from .models import Item,User
from .serializers import ItemSerializer,UserSerializer
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics
from rest_framework.reverse import reverse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import viewsets


class ItemListViews(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

class UserListViews(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


'''
@api_view(['GET'])
def api_root(request, format=None):
    return Response({
        'item': reverse('item-list', request=request, format=format),
    })
'''