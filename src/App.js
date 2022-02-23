import './app.css';
import Home from './pages/home/Home';
import User from './pages/user/User';
import Login from './pages/login/Login';
import NewUser from './pages/newUser/NewUser';
import Product from './pages/product/Product';
import Topbar from './components/topbar/Topbar';
import UserList from './pages/userList/UserList';
import Sidebar from './components/sidebar/Sidebar';
import NewProduct from './pages/newProduct/NewProduct';
import ProductList from './pages/productList/ProductList';
import {Routes, Route, BrowserRouter as Router, Navigate} from 'react-router-dom';

const Apps = () => {
    const admin = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.isAdmin;
    return (
        <Router>
            {admin ? (
                <div className="App">
                    <Topbar/>
                    <div className='container'>
                        <Sidebar/>
                        <Routes>
                            <Route exact path='/' element={<Home/>} />
                            <Route path='/users' element={<UserList/>} />
                            <Route path='/newUser' element={<NewUser/>} />
                            <Route path='/user/:userId' element={<User/>} />
                            <Route path='/products' element={<ProductList/>} />
                            <Route path='/newproduct' element={<NewProduct/>} />
                            <Route path='/product/:productId' element={<Product/>} />
                        </Routes>
                    </div>
                </div>
            ) : (
                <Routes>
                    <Route path='/login' element={admin ? <Navigate to="/" /> : <Login/>} />
                </Routes>
            )}
        </Router>
    )
};

export default Apps;