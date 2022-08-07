import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { updateBook } from './bookSlice';
const UpdateBook = () => {
      const location = useLocation()
      const [id , setId] = useState(location.state.id)
      const [name , setName] = useState(location.state.name)
      const [author , setAuther] = useState(location.state.author)
      const [price , setPrice] = useState(location.state.price)
      const navigate = useNavigate()
      
      
      const dispatch = useDispatch()

      const hendelFromSubmit = (e) => {
            e.preventDefault();
            dispatch(updateBook({id , name , author , price}))
            navigate('/' , { replace: true })
            toast("Update Successfull...")

            
      }
  
      return (
            <div className="max-w-7xl m-auto px-2">
      <div class="max-w-2xl h-[450px] dark:bg-gray-700 flex items-center justify-center  mx-auto overflow-hidden bg-white rounded-lg shadow-md mt-10">
        <section class="max-w-4xl p-6 mx-auto  bg-white dark:bg-gray-700">
          <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">
            Please Update Book
          </h2>

          <form onSubmit={hendelFromSubmit} >
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label class="text-gray-700 dark:text-gray-200" for="name">
                  Book Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={name}
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label
                  class="text-gray-700 dark:text-gray-200"
                  for="auther"
                >
                  Auther Name
                </label>
                <input
                  id="auther"
                  name="auther"
                  value={author}

                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  onChange={(e) => setAuther(e.target.value)}
                />
              </div>

              <div>
                <label class="text-gray-700 dark:text-gray-200" for="price">
                  Price
                </label>
                <input
                  id="price"
                  name="price"
                  type="number"
                  value={price}
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>

              <div className=" hidden lg:block">
                <label
                  class="text-gray-700 dark:text-gray-200 "
                  for="passwordConfirmation"
                >
                  Published Date/optional
                </label>
                <input
                  id="passwordConfirmation"
                  type="date"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
            </div>

            <div class="flex justify-center mt-6">
              <button class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                Update Now
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
      );
};

export default UpdateBook;