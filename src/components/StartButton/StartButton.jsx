import "./StartButton.scss"
import { AnimatePresence, motion } from "framer-motion"

export const StartButton = ({startButton, StartGame}) => {
    return (
        <AnimatePresence>
            {startButton.isActive && (
                <motion.div
                    id="start-btn"
                    initial={{ opacity: 0, pointerEvents: "none" }}
                    animate={{ opacity: 1, pointerEvents: "all" }}
                    transition={{ delay: 0.8, duration: 0.4 }}>
                    <button id="start-btn" type="button" onClick={StartGame}>Start</button>
                </motion.div>
            )}
        </AnimatePresence>
    )
}