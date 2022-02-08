import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Home from "./pages/Home.js";
import Cart from "./pages/Cart.js";
import NotFound from "./pages/NotFound.js";
import Navigation from "./components/Navigation";
const App = () => {
  return (
    <>
    <Router>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
    </>
  )
}
export default App;