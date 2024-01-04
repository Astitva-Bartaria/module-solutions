import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import AddSales from './components/AddSales';
import TopSales from './components/TopSales';
import Revenue from './components/Revenue';
import Login from './components/Login';
import Register from './components/Register';
import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            {/* routes to different components of the application */}
            <Routes>
                <Route exact path="/" element={<Home />} />
                {/* <Route exact path="/home" element={<Home />} /> */}
                <Route exact path="/addsales" element={<AddSales />} />
                <Route exact path="/topsales" element={<TopSales />} />
                <Route exact path="/revenue" element={<Revenue />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
