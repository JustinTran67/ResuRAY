# ResuRAY 🎯

> AI-powered resume analysis and optimization platform that helps job seekers maximize their chances of landing interviews

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://resuray.vercel.app/)
[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](LICENSE)
[![Django](https://img.shields.io/badge/Django-5.2.8-092E20?logo=django)](https://www.djangoproject.com/)
[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react)](https://reactjs.org/)
[![OpenAI](https://img.shields.io/badge/OpenAI-GPT--4o--mini-412991?logo=openai)](https://openai.com/)

## 🌟 Overview

ResuRAY is a full-stack web application that leverages OpenAI's GPT-4o-mini to provide intelligent resume analysis and job matching. Upload your resume and a job description, and receive comprehensive feedback including a match score, skill gap analysis, personalized suggestions, and even a custom cover letter—all powered by cutting-edge AI.

**Live Application:** [https://resuray.vercel.app/](https://resuray.vercel.app/)

## ✨ Key Features

- **🎯 Smart Match Scoring**: Get an objective 0-100 match score between your resume and target job description
- **📊 Comprehensive Analysis**: 
  - Identifies missing skills and qualifications
  - Highlights your strengths relevant to the position
  - Pinpoints weaknesses that need improvement
- **✍️ AI-Powered Suggestions**: Receive improved resume bullet points optimized for ATS systems and recruiter appeal
- **💼 Custom Cover Letters**: Generate personalized cover letters tailored to each job application
- **📄 PDF Processing**: Seamless PDF upload and text extraction for resume parsing
- **⚡ Real-time Analysis**: Fast, responsive UI with loading states and smooth animations
- **📱 Responsive Design**: Modern, clean interface built with Tailwind CSS

## 🛠️ Technical Stack

### Backend
- **Framework**: Django 5.2.8 + Django REST Framework
- **AI Integration**: OpenAI API (GPT-4o-mini)
- **PDF Processing**: PyPDF2 for document parsing
- **Server**: Gunicorn with WhiteNoise for static file serving
- **Database**: SQLite (development)
- **Deployment**: Railway

### Frontend
- **Framework**: React 19.2.0
- **Build Tool**: Vite
- **Routing**: React Router DOM 7.9.6
- **Styling**: Tailwind CSS 3.4.18
- **Animations**: Custom CSS animations with scroll-based triggers
- **Deployment**: Vercel-ready configuration

## 🏗️ Architecture

```
ResuRAY/
├── backend/                 # Django REST API
│   ├── api/                # Core API application
│   │   ├── views.py       # Resume analysis endpoint
│   │   ├── serializers.py # Data validation
│   │   └── urls.py        # API routing
│   ├── backend/           # Django project settings
│   ├── manage.py          # Django management script
│   └── requirements.txt   # Python dependencies
│
└── frontend/              # React SPA
    ├── src/
    │   ├── components/    # Reusable UI components
    │   │   ├── Home.jsx   # Resume upload form
    │   │   └── Analysis.jsx # Results display
    │   ├── pages/         # Route pages
    │   ├── hooks/         # Custom React hooks
    │   └── App.jsx        # Main application component
    └── package.json       # Node dependencies
```

## 🚀 Getting Started

### Prerequisites
- Python 3.10+
- Node.js 18+
- OpenAI API key

### Backend Setup

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Create virtual environment**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Configure environment variables**
   
   Create a `.env` file in the `backend` directory:
   ```env
   OPENAI_API_KEY=your_openai_api_key_here
   ```

5. **Run migrations**
   ```bash
   python manage.py migrate
   ```

6. **Start development server**
   ```bash
   python manage.py runserver
   ```

   Backend will be available at `http://localhost:8000`

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Create a `.env` file in the `frontend` directory:
   ```env
   VITE_API_BASE_URL=http://localhost:8000
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

   Frontend will be available at `http://localhost:5173`

## 📖 Usage

1. **Upload Resume**: Select a PDF file containing your resume
2. **Enter Job Description**: Paste the complete job description from the posting
3. **Submit**: Click "Submit" and wait for AI analysis (typically 10-15 seconds)
4. **Review Results**: Examine your match score, feedback, and generated cover letter
5. **Iterate**: Use suggestions to improve your resume and re-analyze

## 🔑 Key Technical Highlights

### AI Integration
- Utilizes OpenAI's Response API for structured output
- Custom prompt engineering for consistent JSON responses
- Comprehensive error handling for API failures

### Backend Architecture
- RESTful API design following Django best practices
- MultiPart form data handling for file uploads
- CORS configuration for cross-origin requests
- Environment-based configuration for security

### Frontend Engineering
- Modern React patterns with hooks (useState, useEffect, useNavigate)
- Custom intersection observer hook for scroll animations
- Client-side routing with protected state management
- Responsive design with mobile-first approach

### DevOps
- Railway deployment for backend with Procfile configuration
- Vercel-ready frontend setup
- Environment variable management
- Static file serving optimization

## 🎨 UI/UX Features

- **Smooth Animations**: Fade-in effects and scroll-triggered animations
- **Loading States**: Clear feedback during AI processing
- **Color-Coded Scoring**: Visual indicators (green/yellow/red) for match scores
- **PDF Preview**: Inline resume viewing alongside analysis
- **Responsive Layout**: Optimized for desktop and tablet viewing

## 🔐 Security Considerations

- API key management through environment variables
- CSRF protection enabled
- Trusted origins configuration for deployment
- File upload validation (PDF only)

## 📦 Deployment

### Backend (Railway)
The application is configured for Railway deployment with:
- `Procfile` for Gunicorn server
- `requirements.txt` for dependency management
- Static file serving via WhiteNoise
- Environment variable configuration

### Frontend (Vercel)
Ready for Vercel deployment with:
- Vite build configuration
- Environment variable support
- SPA routing setup

## 🤝 Contributing

This is a portfolio project, but feedback and suggestions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Improve documentation

## 📄 License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Developer

**Justin Tran**

This project demonstrates:
- Full-stack development proficiency (Python/Django + React)
- AI/ML integration and prompt engineering
- RESTful API design and implementation
- Modern frontend development with React hooks
- Cloud deployment and DevOps practices
- UI/UX design with Tailwind CSS

---

*Built with ❤️ using Django, React, and OpenAI*
