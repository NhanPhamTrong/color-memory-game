import "./GameOverModal.scss"

export const GameOverModal = ({score, highestScore}) => {
    return (
        <div id="game-over-modal">
            <div className="modal-background"></div>
            <div className="modal-content">
                <h1>You lost ...</h1>
                <div className="score">
                    <p>Score: {score}</p>
                    <p>Highest score: {highestScore}</p>
                </div>
                <p className="modal-text">You clicked the same color twice.</p>
                <button type="button">Try again</button>
            </div>
        </div>
    )
}