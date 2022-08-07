import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillEdit } from 'react-icons/ai';
import { AiFillDelete } from 'react-icons/ai';
import { deleteBook } from "./bookSlice";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const ShowBook = () => {
      const books = useSelector((state) => state.books.book)
      console.log(books);
      const navigate = useNavigate()
       
      const dispatch = useDispatch()
      const hendelDelete = (id) =>{
        dispatch(deleteBook(id))
        toast("Delete SuccessFull")

      }


  return (
    <div className="max-w-7xl m-auto px-2">
      <div class="max-w-2xl h-[450px] dark:bg-gray-700  mx-auto overflow-hidden bg-white rounded-lg shadow-md mt-10">
        <p className="text-center text-white mt-3">All BooK List</p>

        <div class="overflow-x-auto relative mt-10">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:text-gray-400">
              <tr>
                <th scope="col" class="py-3 px-6">
                  BooK Name
                </th>
                <th scope="col" class="py-3 px-6">
                  Auther
                </th>
                <th scope="col" class="py-3 px-6">
                  Price
                </th>
                <th scope="col" class="py-3 px-6">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>

              {
                books && books.map((book) => {  
                  const {name , author , price , id} = book
                
               return <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {book.name}
                </th>
                <td class="py-4 px-6">{book.author}</td>
                <td class="py-4 px-6">{book.price}</td>
                <td class="py-4 px-6">
                  <div className="flex gap-5">
                  <Link to='/edit-book' state={{ name , author ,price , id}}  className="text-red-500 text-xl cursor-pointer"><AiFillEdit/></Link>
                  <span onClick={()=>hendelDelete(book.id)} className="text-red-500 text-xl cursor-pointer"><AiFillDelete/></span>
                  </div>
                  


                </td>
              </tr> })
              }
             
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ShowBook;
