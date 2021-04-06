from rest_framework import serializers
from .models import birthdaysList

class birthdayDataSerializer(serializers.Serializer):
    id=serializers.IntegerField(read_only=True)
    name = serializers.CharField(required=True, max_length=20)
    age = serializers.IntegerField(required=True)

    def create(self, validated_data):
        return birthdaysList.objects.create(**validated_data)