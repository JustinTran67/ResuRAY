from rest_framework import serializers

# use .Seralizer when no model is made and .ModelSerializer when there is a database model
class ResumeAnalysisSerializer(serializers.Serializer):
    resume = serializers.FileField(required=True)
    job_description = serializers.CharField(required=True)