import { Title } from "./components/Title/Title"
import { Stats } from "./components/Stats/Stats"
import { Card } from "./components/Card/Card"
import { GameOverModal } from "./components/GameOverModal/GameOverModal"
import { cardStore } from "./store"
import { useSelector } from "react-redux"
import { Provider } from 'react-redux'

export const App = () => {
    return (
        <>
            <header>
                <Title />
                <Stats />
            </header>
            <main>
                <Provider store={cardStore()}>
                    <Card />
                </Provider>
            </main>
            {/* <GameOverModal /> */}
        </>
    )
}