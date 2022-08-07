import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../../Nevber/Login';
import AddBook from './AddBook';
import Home from './Home';
import ShowBook from './ShowBook';
import UpdateBook from './UpdateBook';

const Book = () => {
      return (
            <div>
                  <Routes>
                        
                        <Route path='/' element={<ShowBook/>}></Route>
                        <Route path='/add-books' element={<AddBook/>}></Route>
                        <Route path='/edit-book' element={<UpdateBook/>}></Route>
                        <Route path='/login' element={<Login/>}></Route>
                  </Routes>
            </div>
      );
};

export default Book;