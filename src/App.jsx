import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react"
import { Title } from "./components/Title/Title"
import { Stats } from "./components/Stats/Stats"
import { StartButton } from './components/StartButton/StartButton'
import { CardsList } from "./components/CardsList/CardsList"
import { GameOverModal } from "./components/GameOverModal/GameOverModal"
import { statsActions } from './redux/slice/StatsSlice'
import { fetchColors } from "./redux/slice/CardsListSlice"
import { startButtonActions } from './redux/slice/StartButtonSlice'

export const App = () => {
    const dispatch = useDispatch()
    const stats = useSelector(state => state.stats)
    const modal = useSelector(state => state.modal)
    const cardsList = useSelector(state => state.cardsList)
    const startButton = useSelector(state => state.startButton)

    useEffect(() => {
        dispatch(fetchColors())
    }, [dispatch])

    const StartGame = () => {
        dispatch(startButtonActions.StartGame())
    }

    const ChooseColor = (e) => {
        dispatch(statsActions.AddScore())
    }

    return (
        <>
            <header>
                <Title />
                <Stats stats={stats} />
                <StartButton startButton={startButton} StartGame={StartGame} />
            </header>
            <main>
                <CardsList cardsList={cardsList.list} stats={stats} ChooseColor={ChooseColor} />
            </main>
            <GameOverModal stats={stats} modal={modal} />
        </>
    )
}