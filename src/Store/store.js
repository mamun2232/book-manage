import { configureStore } from '@reduxjs/toolkit'
import booksReducer from '../Feature/Book/bookSlice'
export default configureStore({
      reducer:{
            books: booksReducer
      }
})