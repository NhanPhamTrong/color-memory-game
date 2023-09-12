import "./StartButton.scss"

export const StartButton = ({startButton, StartGame}) => {
    return startButton.isActive && (
        <div id="start-btn">
            <button id="start-btn" type="button" onClick={StartGame}>Start</button>
        </div>
    )
}