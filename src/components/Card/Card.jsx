import "./Card.scss"

export const Card = ({colorList}) => {
    return (
        <ul id="card">
            {colorList.map((color, index) => (
                <li key={index}>
                    <div className="color" style={{"--color": color.code}}></div>
                    <div className="color-name" style={{"--color": color.code}}>{color.name}</div>
                </li>
            ))}
        </ul>
    )
}