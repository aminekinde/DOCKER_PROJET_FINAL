from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader

def player_list(request):
    return HttpResponse("Hello world!")