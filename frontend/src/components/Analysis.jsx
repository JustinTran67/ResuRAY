import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

export default function Analysis({ resume, score, missing, strengths, weaknesses, suggestions, cover_letter }) {
    const [resumePreview, setResumePreview] = useState();

    useEffect(() => {
        if (resume) {
            const preview = URL.createObjectURL(resume);
            setResumePreview(preview);
        }
    }, [resume]);

    const navigate = useNavigate();
    const handleNav = () => {
        navigate('/');
    }

    return (
        <div className="px-20">
            <h1 className="mt-20 mb-20 text-[64px] font-bold">Analysis</h1>
            <div className="flex grid-cols-2 gap-4 mb-20">
                <div className="">
                    <iframe className="rounded-xl shadow-lg" src={resumePreview} width="700" height="900"></iframe>
                </div>
                <div className="bg-gray-200 rounded-xl px-4">
                    <div className="mt-10 mb-10 text-3xl font-bold">
                        <h2 className="mb-2" >Match Score:</h2>
                        <div>
                            <span className={(score >= 80)? "text-green-400 text-5xl" : (score >= 50)? "text-yellow-400 text-5xl" : "text-red-500 text-5xl"}>{score}</span>
                        </div>
                    </div>
                    <div className="mb-10 text-left">
                        <h2 className="text-2xl mb-2 font-semibold">Missing Skills:</h2>
                        <ul className="px-4 list-disc">
                            {missing.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="mb-10 text-left">
                        <h2 className="text-2xl mb-2 font-semibold">Strengths:</h2>
                        <ul className="px-4 list-disc">
                            {strengths.map((strength, index) => (
                                <li key={index}>{strength}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="mb-10 text-left">
                        <h2 className="text-2xl mb-2 font-semibold">Weaknesses:</h2>
                        <ul className="px-4 list-disc">
                            {weaknesses.map((weakness, index) => (
                                <li key={index}>{weakness}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="mb-10 text-left">
                        <h2 className="text-2xl mb-4 font-semibold">Improved Bullet Points:</h2>
                        <ul className="px-4 list-disc">
                            {suggestions.map((suggestion, index) => (
                                <li className="mb-4" key={index}>{suggestion}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="mb-10 text-left">
                        <h2 className="text-center text-2xl mb-4 font-semibold">Cover Letter:</h2>
                        <p>{cover_letter}</p>
                    </div>
                </div>
            </div>
            <div>
                <button className="mb-20 px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 font-semibold" onClick={handleNav}>Rate Another Resume</button>
            </div>
        </div>
   )
}