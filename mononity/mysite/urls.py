"""deff URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/dev/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""

from django.contrib.auth import views as autho
from django.conf.urls import url
from django.conf.urls.static import static
from django.contrib import admin
from client.views import *
import mysite.settings


urlpatterns = [
    url(r'^$', index,name='index'),
    url(r'^search/', search),
    url(r'^admin/', admin.site.urls),
    url(r'^login/',autho.login,{'template_name':'login.html'},name='login'),
    url(r'^logout/',autho.logout,{'template_name':'index.html'},name='logout'),
    url(r'^register/$',register,name='register'),
    url(r'^apps/', apps,name='apps'),
    url(r'^stan/appreg', stan_appreg,name='appreg'),
    url(r'^stan/', stan,name='stan'),
    url(r'^recl/', recl,name='recl'),
    url(r'^ress/', ress,name='ress'),
    url(r'^dlzip/(?P<zipname>.*)$', deletezip,name='dlzip'),
    url(r'^thingplug/sub', loradust),
]
urlpatterns += static(mysite.settings.MEDIA_URL, document_root=mysite.settings.MEDIA_ROOT)
urlpatterns += static(mysite.settings.STATIC_URL, document_root=mysite.settings.STATIC_ROOT)



