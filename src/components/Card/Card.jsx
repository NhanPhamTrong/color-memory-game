import "./Card.scss"
import { useDispatch, useSelector } from "react-redux"
import { statsActions } from "../../store/StatsSlice"
import { useEffect } from "react"
import { loadCards } from "../../store/CardsSlice"

export const Card = () => {
    const dispatch = useDispatch()
    const cards = useSelector(state => {
        console.log(state)
        return state.cards})

    useEffect(() => {
        dispatch(loadCards())
    }, [dispatch])

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

    const ChooseColor = (e) => {
        dispatch(statsActions.AddScore())
    }

    return (
        <ul id="card">
            {cards.map((card, index) => (
                <li key={index} name={card.name} onClick={ChooseColor}>
                    <div className="color" style={{"--color": ("#" + card.hex)}}></div>
                    <div className="color-name" style={{"--color": ("#" + card.hex)}}>{AddSpace(card.name)}</div>
                </li>
            ))}
        </ul>
    )
}