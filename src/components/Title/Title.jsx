import "./Title.scss"
import { motion } from "framer-motion"

export const Title = () => {
    return (
        <motion.h1
            id="title"
            initial={{ opacity: 0, pointerEvents: "none" }}
            animate={{ opacity: 1, pointerEvents: "all" }}
            transition={{ duration: 0.4 }}>
            <span>COLOR </span>
            <span>MEMORY </span>
            <span>GAME</span>
        </motion.h1>
    )
}