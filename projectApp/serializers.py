from rest_framework import serializers
from .models import Item,User

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ['created','title','text']


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['created','Name','text']