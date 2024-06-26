import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Home from "./Screens/Home";
import Login from "./Screens/Login";

// import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Signup from "./Screens/Signup.js";
import MyOrders from "./Screens/MyOrders.js";

function App() {
  return (
  <Router>
    <div> 
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/signup" element={<Signup/>}/>
        <Route exact path="/myorders" element={<MyOrders/>}/>
      </Routes>
    </div>
  </Router>
  )
}

export default App;
