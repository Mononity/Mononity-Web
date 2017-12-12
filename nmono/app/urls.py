from django.conf.urls import url
from app import views

urlpatterns = [

    url(r'^.*\.html', views.intro, name='intro'),

    # The home page
    url(r'^$', views.index, name='index'),
    url(r'^ml/(?P<wildcard>.*)', views.machinelearn),
    url(r'^md/(?P<model>.*)', views.modeler),
]