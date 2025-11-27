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
            const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'; // exclusive to vite all variables must start with VITE_
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
            <div className="mt-20 mb-10 opacity-0 animate-fadeUp">
                <h1 className="text-[64px] font-bold">ResuRAY</h1>
            </div>
            <div className="">
                <form className="" onSubmit={handleSubmit}>
                    <h1 className="text-xl font-semibold opacity-0 animate-fadeUp [animation-delay:0.5s]">Resume PDF:</h1>
                    <br />
                    <input className="mb-10 opacity-0 animate-fadeUp [animation-delay:0.5s]" type="file" accept="application/pdf" onChange={(e) => setResume(e.target.files[0])}/>
                    <br />
                    <h1 className="text-xl font-semibold opacity-0 animate-fadeUp [animation-delay:0.5s]">Job Description:</h1>
                    <br />
                    <textarea className="mb-10 w-[700px] h-[300px] bg-gray-100 rounded-xl opacity-0 animate-fadeUp [animation-delay:0.5s]" value={jobDescription} onChange={(e) => setJobDescription(e.target.value)}/>
                    <br />
                    <button className="mb-20 bg-blue-500 hover:bg-blue-600 transition duration-200 ease-in-out px-4 py-2 text-xl text-white rounded-xl font-semibold opacity-0 animate-fadeUp [animation-delay:1s]" type="submit" disabled={loading}>
                        {loading ? 'Analyzing...' : 'Submit'}
                    </button>
                </form>
            </div>
        </div>
    )
}