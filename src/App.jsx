import { Title } from "./components/Title/Title"
import { Stats } from "./components/Stats/Stats"
import { Card } from "./components/Card/Card"
import { GameOverModal } from "./components/GameOverModal/GameOverModal"

export const App = () => {
    return (
        <>
            <header>
                <Title />
                <Stats />
            </header>
            <main>
                <Card />
                <GameOverModal />
            </main>
        </>
    )
}