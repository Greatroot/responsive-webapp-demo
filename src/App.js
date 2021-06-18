import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from './components/Pages/HomePage/Home';
import Services from "./components/Pages/Services/Services";
import Products from "./components/Pages/Products/Products";
import SignUp from "./components/Pages/SignUp/SignUp";
import Footer from './components/Pages/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/services' component={Services} />
            <Route path='/products' component={Products} />
            <Route path='/sign-up' component={SignUp} />
        </Switch>
        <Footer />
    </BrowserRouter>
  );
}

export default App;

