from rest_framework import routers
from .api import TaskViewSet

router = routers.DefaultRouter()

router.register('api/v1/tasks', TaskViewSet, 'tasks')

urlpatterns = router.urls
