import './login.css';
import { useState} from "react";
import { login } from "../../apiCall";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    document.title = 'Wolmart | Login';
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleClick = (e) => {
        e.preventDefault();
        login(dispatch, {username, password});
        navigate('/')
    }
    return (
        <div style={{
            height:'100vh', 
            display: 'flex', 
            alignItems:'center',
            flexDirection: 'column',
            justifyContent:'center',
        }} className='loginForm'>
            <input className='loginInput' type="text" placeholder='Username' onChange={e => setUsername(e.target.value)} />
            <input className='loginInput' type="password" placeholder='Password' onChange={e => setPassword(e.target.value)} />
            <button className='loginButton' onClick={handleClick}>Login</button>
        </div>
    )
};

export default Login;
