# Create your views here.

from django.shortcuts import render_to_response



from models import *


def recent_activities(request):
    items = quakedetails.objects.all() #ORM queries the templates for all of the to-do entries.

    return render_to_response('database.html', {'items': items})

def showmarkers(request):
    return render_to_response('markers.html')

