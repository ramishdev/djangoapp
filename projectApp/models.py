from django.db import models

# Create your models here.

class Item(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=100, blank=True, default='')
    text = models.TextField()
    owner = models.ForeignKey('auth.User', related_name='items', on_delete=models.CASCADE)


    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)