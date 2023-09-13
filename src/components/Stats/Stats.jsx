import "./Stats.scss"
import { motion } from "framer-motion"

export const Stats = ({stats}) => {
    return (
        <motion.div
            id="stats"
            initial={{ opacity: 0, pointerEvents: "none" }}
            animate={{ opacity: 1, pointerEvents: "all" }}
            transition={{ delay: 0.4, duration: 0.4 }}>
            <h1>Level: {stats.level}</h1>
            <div className="score">
                <p>Score: {stats.score}</p>
                <p>Highest score: {stats.highestScore}</p>
            </div>
        </motion.div>
    )
}