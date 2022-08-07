import { createSlice } from '@reduxjs/toolkit'

const bookInitalState = {
      book: [
   { id: 1,  name: "Love Bangladesh", author: "Anisul Islam" , price: 120 },
    { id: 2, name: "Bangladeshi", author: "Mamun Islam" , price: 130 },
    { id: 3, name: "Himu", author: "Humaion Ahmed" , price: 130 },
      ]
}

export const bookSlice = createSlice({
      name: "books",
      initialState: bookInitalState,
      reducers: {
            showBooks: (state) => state ,
            addBooks: (state , action) =>{
                  state.book.push(action.payload)
            },
            deleteBook: (state , action) =>{
                  const id = action.payload
                  state.book = state.book.filter((bo) => bo.id !== id)
            },
            updateBook: (state , action) =>{
                  const {id , name , author , price} = action.payload
                  let isBookExsist = state.book.filter((boo) => boo.id === id)
                  console.log(isBookExsist);
                  if(isBookExsist){
                        isBookExsist[0].name = name
                        isBookExsist[0].author = author
                        isBookExsist[0].price = price
                  }
            }
      }
})

export const {showBooks , addBooks , deleteBook , updateBook} = bookSlice.actions
export default bookSlice.reducer