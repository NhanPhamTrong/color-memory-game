import { useState } from "react"
import "./Card.scss"

export const Card = ({cards, ChooseColor}) => {
    // const [cardsList, setCardsList] = useState(cards.list)

    console.log(cards)

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
        <ul id="card">
            {cards.list.map((card, index) => (
                <li key={index} name={card.name} onClick={ChooseColor}>
                    <div className="color" style={{"--color": ("#" + card.hex)}}></div>
                    <div className="color-name">{AddSpace(card.name)}</div>
                </li>
            ))}
        </ul>
    )
}