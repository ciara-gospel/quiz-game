import { configureStore } from '@reduxjs/toolkit'
import quizReducer from '../features/counter/quizSlice'

export default configureStore({
  reducer: {
    quiz: quizReducer
  }
})