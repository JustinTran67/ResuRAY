import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const [resume, setResume] = useState(null);
    const [jobDescription, setJobDescription] = useState("");
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!resume) {
            alert("Please upload a resume file!");
            return;
        }
        if (!jobDescription) {
            alert("Please upload a job description!");
            return;
        }
        const formData = new FormData();
        formData.append("resume", resume);
        formData.append("job_description", jobDescription);

        try {
            setLoading(true);
            const API_BASE = import.meta.env.REACT_APP_API_BASE_URL || 'http://localhost:8000'; // exclusive to vite
            const response = await fetch(`${API_BASE}/analyze/`, {
                method: 'POST',
                body: formData,
            });
            // Check if the response is ok and display errors for debugging

            const data = await response.json();
            setResult(data);
        } catch (e) {
            console.error('Error:', e.message);
        } finally {
            setLoading(false);
        }
    }

    const navigate = useNavigate();
    useEffect(() => {
        if (result) {
            navigate('/analysis', { state: { resume: resume, score: result.score, missing: result.missing_skills, strengths: result.strengths, weaknesses: result.weaknesses, suggestions: result.improved_bullets, cover_letter: result.cover_letter } });
        }
    }, [result, navigate, resume]);

    return (
        <div className="text-center">
            <div className="mt-20 mb-10">
                <h1 className="text-[64px] font-bold">ResuRAY</h1>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <h1 className="text-xl font-semibold">Resume PDF:</h1>
                    <br />
                    <input className="mb-10" type="file" accept="application/pdf" onChange={(e) => setResume(e.target.files[0])}/>
                    <br />
                    <h1 className="text-xl font-semibold">Job Description:</h1>
                    <br />
                    <textarea className="mb-10 w-[500px] h-[300px] bg-gray-100 rounded-xl" value={jobDescription} onChange={(e) => setJobDescription(e.target.value)}/>
                    <br />
                    <button className="bg-gray-100 px-2 text-xl font-semibold" type="submit" disabled={loading}>
                        {loading ? 'Analyzing...' : 'Submit'}
                    </button>
                </form>
            </div>
        </div>
    )
}