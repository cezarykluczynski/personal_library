from django.conf.urls import include, url
from django.contrib import admin
from personal_library_app.views import main

from rest_framework import routers
from personal_library_app.rest_views import BookViewSet

router = routers.DefaultRouter()
router.register(r'api/books', BookViewSet)

urlpatterns = [
	url(r'^admin/', include(admin.site.urls)),
	url(r'main/', main.index),
	url(r'^', include(router.urls)),
	# url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
