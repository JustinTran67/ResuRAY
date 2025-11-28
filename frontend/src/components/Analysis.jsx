import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
// hooks
import useInView from "../hooks/useInView"
// assets
import ResuRAYLogo from '../assets/ResuRAYLogo(1).png'

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
        <div className="flex flex-col items-center px-20 mb-60">
            <div className="mt-20 mb-20 flex flex-row items-center gap-2">
                <h1 className="text-[64px] font-bold opacity-0 animate-fadeUp text-primary">Analysis</h1>
                <div className="opacity-0 animate-growIn [animation-delay:0.2s]">
                    <img src={ResuRAYLogo} alt="resuray logo" className="w-24 h-24 mb-10 mx-auto mt-10 animate-scalePulse" />
                </div>
            </div>
            <div className="flex grid-cols-2 gap-4 mb-40 opacity-0 animate-fadeUp [animation-delay:0.5s]">
                <div className="">
                    <iframe className="rounded-xl shadow-xl" src={resumePreview} width="700" height="900"></iframe>
                </div>
                <div className="bg-gray-200 rounded-xl px-4 shadow-xl h-[900px] overflow-y-auto">
                    <div className="mt-10 mb-20 text-3xl font-bold">
                        <h2 className="mb-8" >Match Score:</h2>
                        <div className="">
                            <span className={(score > 80)? "text-green-400 text-6xl opacity-0 animate-fadeUp [animation-delay:1s]" : (score > 60)? "text-yellow-400 text-6xl opacity-0 animate-fadeUp [animation-delay:1s]" : "text-red-500 text-6xl opacity-0 animate-fadeUp [animation-delay:1s]"}>{score}</span>
                        </div>
                    </div>
                    <div className="mb-10 text-left">
                        <h2 className="text-2xl mb-2 font-semibold">Missing Skills:</h2>
                        <ul className="px-4 list-disc">
                            {missing.map((skill, index) => (
                                <li className="mb-2" key={index}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="mb-10 text-left">
                        <h2 className="text-2xl mb-2 font-semibold">Strengths:</h2>
                        <ul className="px-4 list-disc">
                            {strengths.map((strength, index) => (
                                <li className="mb-2" key={index}>{strength}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="mb-10 text-left">
                        <h2 className="text-2xl mb-2 font-semibold">Weaknesses:</h2>
                        <ul className="px-4 list-disc">
                            {weaknesses.map((weakness, index) => (
                                <li className="mb-2" key={index}>{weakness}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="mb-20 text-left">
                        <h2 className="text-2xl mb-4 font-semibold">Improved Bullet Points:</h2>
                        <ul className="px-4 list-disc">
                            {suggestions.map((suggestion, index) => (
                                <li className="mb-4" key={index}>{suggestion}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="mb-10 text-left">
                        <h2 className="text-center text-2xl mb-4 font-semibold space-4">Suggested Cover Letter:</h2>
                        <p className="leading-loose">{cover_letter}</p>
                    </div>
                </div>
            </div>
            <FadeSection>
                <button className="flex flex-rows gap-2 items-center px-4 py-2 bg-primary shadow-xl text-white rounded-2xl text-xl hover:bg-secondary transition duration-200 ease-in-out font-semibold" onClick={handleNav}>Analyze Again<img className="w-10 h-10 animate-scalePulse" src={ResuRAYLogo} alt="resuray logo"></img></button>
            </FadeSection>
        </div>
   )
}

// On scroll fade in component animation
function FadeSection({ children, delay = "0s" }) {
    const [ref, inView] = useInView();
  
    return (
      <div
        ref={ref}
        style={{ animationDelay: delay }}
        className={`opacity-0 ${
          inView ? "animate-fadeUp" : ""
        }`}
      >
        {children}
      </div>
    );
}