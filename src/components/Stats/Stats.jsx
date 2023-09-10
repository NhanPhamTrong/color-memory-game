import { useDispatch, useSelector } from "react-redux"
import "./Stats.scss"

export const Stats = () => {
    const dispatch = useDispatch()
    const stats = useSelector(state => state.stats)
    
    return (
        <div id="stats">
            <h1>Level: {stats.level}</h1>
            <div className="score">
                <p>Score: {stats.score}</p>
                <p>Highest score: {stats.highestScore}</p>
            </div>
        </div>
    )
}