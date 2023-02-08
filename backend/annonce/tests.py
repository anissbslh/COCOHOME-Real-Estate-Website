from django.test import TestCase

from django.contrib.auth.models import User
from annonce.models import Annonce

class Test_Create_Annonce(TestCase):
    @classmethod
    def setUpTestData(cls):
        testuser1 = User.objects.create_user(
            username='test_user1', 
        )