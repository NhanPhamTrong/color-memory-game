import "./Stats.scss"

export const Stats = ({level, score, highestScore}) => {
    return (
        <div id="stats">
            <h1>Level: {level}</h1>
            <div className="score">
                <p>Score: {score}</p>
                <p>Highest score: {highestScore}</p>
            </div>
        </div>
    )
}