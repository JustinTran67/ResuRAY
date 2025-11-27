
export default function Analysis({ resume, score, missing, strengths, weaknesses, suggestions, cover_letter }) {
    return (
        <div>
            <h1 className="mb-20 text-[64px] font-bold">Analysis</h1>
            <div className="mb-10">
                <h2>Match Score: {score}</h2>
            </div>
            <div className="mb-10">
                <h2>Missing Skills:</h2>
                <ul>
                    {missing.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
            <div className="mb-10">
                <h2>Strengths:</h2>
                <ul>
                    {strengths.map((strength, index) => (
                        <li key={index}>{strength}</li>
                    ))}
                </ul>
            </div>
            <div className="mb-10">
                <h2>Weaknesses:</h2>
                <ul>
                    {weaknesses.map((weakness, index) => (
                        <li key={index}>{weakness}</li>
                    ))}
                </ul>
            </div>
            <div className="mb-10">
                <h2>Improved Bullet Points:</h2>
                <ul>
                    {suggestions.map((suggestion, index) => (
                        <li key={index}>{suggestion}</li>
                    ))}
                </ul>
            </div>
            <div className="mb-10 text-left">
                <h2 className="text-center">Cover Letter:</h2>
                <p>{cover_letter}</p>
            </div>
        </div>
   )
}