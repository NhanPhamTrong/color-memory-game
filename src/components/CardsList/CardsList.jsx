import "./CardsList.scss"

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
        <ul id="card-list" className={cardsList.isActive ? "active" : "active"}>
            {cardsList.list && cardsList.list.filter(card => card.isInLevel).map((card, index) => (
                <li key={index} name={card.name} onClick={ChooseCard}>
                    <div className="color" style={{"--color": ("#" + card.hex)}}></div>
                    <div className="color-name">{AddSpace(card.name)}</div>
                </li>
            ))}
        </ul>
    )
}