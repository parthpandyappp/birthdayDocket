from django.contrib import admin
from django.urls import path, include
from .views import *

urlpatterns = [
    path("birthdays/", birthdays.as_view()),
    path("birthdays/<int:pk>", birthdayDetailView.as_view())
]
