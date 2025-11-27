import Analysis from '../components/Analysis'
import { useLocation } from 'react-router-dom'

export default function AnalysisPage() {
    const location = useLocation();
    const { resume, score, missing, strengths, weaknesses, suggestions, cover_letter } = location.state || {};

    return (
        <div>
            <Analysis resume={resume} score={score} missing={missing} strengths={strengths} weaknesses={weaknesses} suggestions={suggestions} cover_letter={cover_letter} />
        </div>
    )
}