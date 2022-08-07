import logo from './logo.svg';
import './App.css';
import Nevber from './Nevber/Nevber';
import Book from './Feature/Book/Book';
import { ToastContainer} from 'react-toastify'
function App() {
  return (
    <div className="App">
      <Nevber/>
      <Book/>
      <ToastContainer/>
     
    </div>
  );
}

export default App;
