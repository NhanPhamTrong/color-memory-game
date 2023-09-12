import "./Stats.scss"

export const Stats = ({stats}) => {
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