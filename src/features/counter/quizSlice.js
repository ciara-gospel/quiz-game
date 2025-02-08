import { createSlice } from '@reduxjs/toolkit'

export const quizSlice = createSlice({
    name: 'counter',
    initialState: {
        tabQuestion: [],
        tabResponse: []
    },
    reducers:{
       setQuestion:  (state, actions) => {
        state.tabQuestion = actions.payload
       },
       setTabResponse: (state, actions) => {
        state.tabQuestion = actions.payload
       },
       addResponse: (state, actions) => {
        state.tabResponse.push (actions.payload)
       },
       ressetQuiz: (state) => {
        state.tabQuestion = []
        state.tabResponse = []
       }
    }
})

export const { setQuestion, setTabResponse, addResponse, ressetQuiz } = quizSlice.actions

export default quizSlice.reducer