import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchColors = createAsyncThunk("fetchColors", async () => {
    const response = await fetch("https://www.csscolorsapi.com/api/colors")
    return response.json()
})

const CardsListSlice = createSlice({
    name: "cards",
    initialState: {
        isActive: false,
        list: []
    },
    extraReducers: builder => {
        builder.addCase(fetchColors.fulfilled, (state, action) => {
            state.list = action.payload.colors.map((color, index) => ({...color, isInLevel: false, isChosen: false, id: index}))
        })
    },
    reducers: {
        GetSmallCardsList(state, action) {
            let newList = action.payload.list.map(card => ({...card, isInLevel: false, isChosen: false}))
            for (let i = 0; i < action.payload.level + 3; i++) {
                let rand = Math.floor(Math.random() * newList.filter(card => !card.isInLevel).length)
                let chosenId = newList.filter(card => !card.isInLevel).length > 0 ? newList.filter(card => !card.isInLevel)[rand].id : rand
                newList = newList.map(card => card.id === chosenId ? {...card, isInLevel: true} : card)
            }
            state.list = newList
        },
        OpenCardsList(state) {
            state.isActive = true
        },
        ChooseCard(state, action) {
            const shuffle = (array) => {
                let currentIndex = array.length
                let randomIndex
              
                // While there remain elements to shuffle.
                while (currentIndex > 0) {
                    // Pick a remaining element.
                    randomIndex = Math.floor(Math.random() * currentIndex)
                    currentIndex--
                
                    // And swap it with the current element.
                    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
                }
              
                return array
            }

            state.list = shuffle(action.payload)
        },
        ResetCardsList(state, action) {
            let newList = action.payload.map(card => ({...card, isInLevel: false, isChosen: false}))
            for (let i = 0; i < 4; i++) {
                let rand = Math.floor(Math.random() * newList.filter(card => !card.isInLevel).length)
                let chosenId = newList.filter(card => !card.isInLevel).length > 0 ? newList.filter(card => !card.isInLevel)[rand].id : rand
                newList = newList.map(card => card.id === chosenId ? {...card, isInLevel: true} : card)
            }
            state.list = newList
        }
    }
})

export { CardsListSlice }

export const cardsListActions = CardsListSlice.actions