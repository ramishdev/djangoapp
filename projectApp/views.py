from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse
from .models import Item
from .serializers import ItemSerializer,UserSerializer
from rest_framework import generics
from django.contrib.auth.models import User
from .permissions import IsOwnerOrReadOnly
from rest_framework import permissions
from rest_framework import viewsets


class UserViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly,IsOwnerOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)




'''
@api_view(['GET'])
def api_root(request, format=None):
    return Response({
        'item': reverse('item-list', request=request, format=format),
    })
'''