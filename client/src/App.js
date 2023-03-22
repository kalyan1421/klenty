import logo from './logo.svg';
import './App.css';
import {Route ,BrowserRouter,Routes} from "react-router-dom"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Bookingcarpage from "./Pages/Bookingcarpage"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/login' exact Component={Login}/>
      <Route path='/' exact Component={Home}/>
      <Route path='/register'  exact Component={Register}/>
      <Route path='/bookingcarpage' exact Component={Bookingcarpage}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
