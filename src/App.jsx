import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { Title } from "./components/Title/Title"
import { Stats } from "./components/Stats/Stats"
import { StartButton } from './components/StartButton/StartButton'
import { CardsList } from "./components/CardsList/CardsList"
import { GameOverModal } from "./components/GameOverModal/GameOverModal"
import { startButtonActions } from './redux/slice/StartButtonSlice'
import { cardsListActions, fetchColors } from "./redux/slice/CardsListSlice"
import { statsActions } from "./redux/slice/StatsSlice"
import { modalActions } from "./redux/slice/ModalSlice"

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
        dispatch(cardsListActions.OpenCardsList())
        dispatch(cardsListActions.GetSmallCardsList({
            level: stats.level,
            list: cardsList.list
        }))
    }

    const ChooseCard = (e) => {
        const newList =  cardsList.list.map(card => {
            if (card.name === e.currentTarget.getAttribute("name")) {
                if (card.isChosen) {
                    dispatch(modalActions.OpenModal())
                    dispatch(statsActions.SetResult())
                    return card
                }
                else {
                    dispatch(statsActions.AddScore())
                    return {...card, isChosen: true}
                }
            }
            else {
                return card
            }
        })

        if (newList.filter(card => card.isInLevel).length === newList.filter(card => card.isChosen).length) {
            dispatch(statsActions.AddLevel())
            console.log(stats.level)
            dispatch(cardsListActions.GetSmallCardsList({
                level: stats.level + 1,
                list: cardsList.list
            }))
        }
        else {
            dispatch(cardsListActions.ChooseCard(newList))
        }
    }

    const TryAgain = () => {
        dispatch(modalActions.CloseModal())
        dispatch(statsActions.Reset())
        dispatch(cardsListActions.ResetCardsList(cardsList.list))
    }

    return (
        <>
            <header>
                <Title />
                <Stats stats={stats} />
                <StartButton startButton={startButton} StartGame={StartGame} />
            </header>
            <main>
                <CardsList cardsList={cardsList} stats={stats} ChooseCard={ChooseCard} />
            </main>
            <GameOverModal stats={stats} modal={modal} TryAgain={TryAgain} />
        </>
    )
}