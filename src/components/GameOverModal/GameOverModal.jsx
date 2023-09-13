import "./GameOverModal.scss"
import { motion, AnimatePresence } from "framer-motion"

export const GameOverModal = ({stats, modal, TryAgain}) => {
    return (
        <AnimatePresence>
            {modal.isActive && (
                <motion.div
                    id="game-over-modal"
                    initial={{ opacity: 0, pointerEvents: "none" }}
                    animate={{ opacity: 1, pointerEvents: "all" }}
                    exit={{ opacity: 0, pointerEvents: "none" }}
                    transition={{ duration: 0.2 }}>
                    <div className="modal-background"></div>
                    <div className="modal-content">
                        <h1>You lost ...</h1>
                        <div className="score">
                            <p>Score: {stats.score}</p>
                            <p>Highest score: {stats.highestScore}</p>
                        </div>
                        <p className="modal-text">{modal.content}</p>
                        <motion.button
                            type="button"
                            onClick={TryAgain}
                            whileHover={{ scale: [null, 1.3, 1.1] }}
                            transition={{ duration: 0.2 }}>Try again</motion.button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}