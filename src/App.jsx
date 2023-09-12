import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react"
import { Title } from "./components/Title/Title"
import { Stats } from "./components/Stats/Stats"
import { StartButton } from './components/StartButton/StartButton'
import { Card } from "./components/Card/Card"
import { GameOverModal } from "./components/GameOverModal/GameOverModal"
import { statsActions } from "./store/StatsSlice"
import { fetchColors } from "./store/CardsSlice"

export const App = () => {
    const dispatch = useDispatch()
    const stats = useSelector(state => state.stats)
    const modal = useSelector(state => state.modal)
    const cards = useSelector(state => state.cards)

    useEffect(() => {
        dispatch(fetchColors())
    }, [dispatch])

    const ChooseColor = (e) => {
        dispatch(statsActions.AddScore())
    }

    return (
        <>
            <header>
                <Title />
                <Stats stats={stats} />
                <StartButton />
            </header>
            <main>
                <Card cards={cards} stats={stats} ChooseColor={ChooseColor} />
            </main>
            <GameOverModal stats={stats} modal={modal} />
        </>
    )
}