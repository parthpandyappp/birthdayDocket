from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from django.http import HttpResponse, JsonResponse
from rest_framework.views import APIView
from rest_framework.parsers import JSONParser
from .models import birthdaysList
from rest_framework import status
from .serializers import birthdayDataSerializer

# Create your views here.

# function-based view
"""def birthdays(request):
    if request.method == 'GET':
        birthday = birthdaysList.objects.all()
        serializer = birthdayDataSerializer(birthday, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = birthdayDataSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)"""

# Class-based view


class birthdays(APIView):
    queryset = birthdaysList.objects.all()
    serializer_class = birthdayDataSerializer

    def get(self, request, format=None):
        birthday = birthdaysList.objects.all()
        serializer = birthdayDataSerializer(birthday, many=True)
        return Response(serializer.data)

    def post(self, request,  format=None):
        serializer = birthdayDataSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_404_CREATED)

class birthdayDetailView(APIView):
    queryset = birthdaysList.objects.all()
    serializer_class = birthdayDataSerializer

    def get(self, request, pk):
        birthday = birthdaysList.objects.filter(pk=pk)
        serializer = birthdayDataSerializer(birthday, many=True)
        return Response(serializer.data)

    def delete(self, request, pk):
        birthdayData = birthdaysList.objects.filter(pk=pk)
        birthdayData.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
