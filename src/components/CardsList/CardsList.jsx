import "./CardsList.scss"
import { motion, AnimatePresence } from "framer-motion"

export const CardsList = ({cardsList, ChooseCard}) => {
    const AddSpace = (text) => {
		// READ ONLY CONTENT
        let name = text.split("")
        for (let i = 1; i < name.length - 1; i++) {
            if (name[i + 1] === name[i + 1].toUpperCase()) {
                name[i] = name[i] + " "
            }
        }
        return name.join("")
    }

    return (
        <AnimatePresence>
            {cardsList.isActive && (
                <motion.ul
                    id="card-list"
                    initial={{ opacity: 0, pointerEvents: "none" }}
                    animate={{ opacity: 1, pointerEvents: "all" }}
                    transition={{ duration: 0.4 }}>
                    {cardsList.list && cardsList.list.filter(card => card.isInLevel).map((card, index) => (
                        <li key={index} name={card.name} onClick={ChooseCard}>
                            <div className="color" style={{"--color": ("#" + card.hex)}}></div>
                            <div className="color-name">{AddSpace(card.name)}</div>
                        </li>
                    ))}
                </motion.ul>
            )}
        </AnimatePresence>
    )
}