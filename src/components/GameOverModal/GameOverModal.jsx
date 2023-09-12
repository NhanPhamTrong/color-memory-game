import { useDispatch } from "react-redux"
import "./GameOverModal.scss"
import { modalActions } from "../../redux/ModalSlice"
import { statsActions } from "../../redux/slice/StatsSlice"

export const GameOverModal = ({stats, modal}) => {
    const dispatch = useDispatch()

    const TryAgain = () => {
        dispatch(modalActions.CloseModal())
        dispatch(statsActions.Reset())
    }

    return (
        <div id="game-over-modal" className={modal.isActive ? "active" : "false"}>
            <div className="modal-background"></div>
            <div className="modal-content">
                <h1>You lost ...</h1>
                <div className="score">
                    <p>Score: {stats.score}</p>
                    <p>Highest score: {stats.highestScore}</p>
                </div>
                <p className="modal-text">{modal.content}</p>
                <button type="button" onClick={TryAgain}>Try again</button>
            </div>
        </div>
    )
}