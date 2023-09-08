import { Title } from "./components/Title/Title"
import { Stats } from "./components/Stats/Stats"
import { Card } from "./components/Card/Card"
import { GameOverModal } from "./components/GameOverModal/GameOverModal"
import { useEffect } from "react"

export const App = () => {
    const colorList = [
        {
            code: "rgb(255, 0, 0)",
            name: "red"
        },
        {
            code: "rgb(255, 255, 0)",
            name: "yellow"
        },
        {
            code: "rgb(255, 0, 255)",
            name: "pink"
        },
        {
            code: "rgb(0, 0, 0)",
            name: "black"
        },
        {
            code: "rgb(0, 255, 0)",
            name: "lime"
        },
        {
            code: "rgb(0, 0, 255)",
            name: "blue"
        }
    ]

    useEffect(() => {
        fetch("https://color-names.herokuapp.com/v1/")
            .then(res => res.json())
            .then((item) => {
                console.log(item)
            })
    }, [])

    return (
        <>
            <header>
                <Title />
                <Stats />
            </header>
            <main>
                <Card colorList={colorList} />
            </main>
            {/* <GameOverModal /> */}
        </>
    )
}