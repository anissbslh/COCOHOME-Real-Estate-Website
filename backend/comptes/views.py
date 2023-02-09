from rest_framework.generics import GenericAPIView, ListAPIView, RetrieveAPIView
from .serializers import*
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.decorators import permission_classes

from .models import User
from django.shortcuts import get_object_or_404


@permission_classes((AllowAny, ))
class GoogleSocialAuthView(ListAPIView):

    serializer_class = GoogleSocialAuthSerializer

    def post(self, request):
        """
        POST with "auth_token"
        Send an idtoken as from google to get user information
        """

        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        data = ((serializer.validated_data)['auth_token'])
        return Response(data, status=status.HTTP_200_OK)

class CompteDetail(RetrieveAPIView):

    serializer_class = GoogleSocialAuthSerializer

    def get_object(self, queryset = None, **kwargs):
        item = self.kwargs.get('email')
        return get_object_or_404(User, email=item)