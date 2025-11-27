from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer

from PyPDF2 import PdfReader
from openai import OpenAI
import os, json

from .serializers import ResumeAnalysisSerializer

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

class AnalyzeResumeReview(GenericAPIView):
    serializer_class = ResumeAnalysisSerializer
    parser_classes = (MultiPartParser, FormParser)
    renderer_classes = (JSONRenderer, BrowsableAPIRenderer)

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        resume_file = serializer.validated_data['resume']
        job_description = serializer.validated_data['job_description']

        try:
            reader = PdfReader(resume_file)
            resume_text = "".join(page.extract_text() or "" for page in reader.pages)
        except:
            return Response(
                {"error": "Failed to read resume PDF."},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        prompt = f""" 
        You are an expert technical recruiter and resume analyst.

        Resume: 
        {resume_text} 

        Job description: 
        {job_description}

        1. Give a match score (0–100).
        2. List missing skills.
        3. List strengths.
        4. List weaknesses.
        5. Suggest better resume bullet points.
        6. Create a personalized cover letter.

        Return ONLY JSON.
        Do NOT wrap the JSON in markdown like ```json.
        Do NOT include explanations.

        Provide the following in this exact format (do NOT include extra text): 
        {{
            "score": number 0-100, 
            "missing_skills": [...], 
            "strengths": [...], 
            "weaknesses": [...], 
            "improved_bullets": [...], 
            "cover_letter": "..." 
        }} 
        """

        try:
            completion = client.responses.create(
                model="gpt-4o-mini",
                input=prompt,
            )

            response_text = completion.output_text
            print("RAW LLM RESPONSE:", response_text)
            data = json.loads(response_text)

        except Exception as e:
            return Response({"error": f"LLM failed: {str(e)}"},
                            status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        return Response(data)