import './user.css';
import { useState} from 'react';
import { updateUser } from '../../apiCall';
import Publish from '@material-ui/icons/Publish';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import MailOutline from '@material-ui/icons/MailOutline';
import PhoneAndroid from '@material-ui/icons/PhoneAndroid';
import PermIdentity from '@material-ui/icons/PermIdentity';
import CalendarToday from '@material-ui/icons/CalendarToday';
import LocationSearching from '@material-ui/icons/LocationSearching';

const User = () => {
    document.title = 'Wolmatz | User'
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userId = location.pathname.split('/')[2];
    // const user = useSelector(state => state.user.users.find(usr => usr._id === userId))
    const {users} = useSelector(state => state.user)
    const user = users !== null && users!== undefined && users.length > 0 && users.find(usr => usr._id === userId)
    const [inputs, setInputs] = useState(user);

    const handleChange = (e) => {
        setInputs(prev => {
            return {...prev, [e.target.name]:e.target.value}
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateUser(userId, inputs, dispatch);
        navigate(`/users`);
    }

    return (
        <div className='user'>
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <div className='usrButton'>
                    <Link to='/users'>
                        <button className="usrAddButton">Back</button>
                    </Link>
                    <Link to='/newUser'>
                        <button className="usrAddButton">Create</button>
                    </Link>
                </div>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="/img/person.jpg" alt="" className="userShowImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">{user.name ? user.name : user.username}</span>
                            <span className="userShowUserTitle">Software Engineering</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <div className="userShowTitle">Acount Details</div>
                        <div className="userShowInfo">
                            <PermIdentity className='userShowIcon'/>
                            <span className="userShowInfoTitle">{user.username}</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className='userShowIcon'/>
                            <span className="userShowInfoTitle">{user.createdAt}</span>
                        </div>
                        <div className="userShowTitle">Acount Details</div>
                        <div className="userShowInfo">
                            <PhoneAndroid className='userShowIcon'/>
                            <span className="userShowInfoTitle">{user.phone}</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline className='userShowIcon'/>
                            <span className="userShowInfoTitle">{user.email}</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearching className='userShowIcon'/>
                            <span className="userShowInfoTitle">{user.address}</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input
                                    type="text"
                                    className="userUpdateInput"
                                    value={inputs.username}
                                    disabled
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input
                                    type="text"
                                    className="userUpdateInput"
                                    name="name" 
                                    value={inputs.name} 
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input
                                    type="text"
                                    className="userUpdateInput"
                                    name="email" 
                                    value={inputs.email} 
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input
                                    type="text"
                                    className="userUpdateInput"
                                    name="phone" 
                                    value={inputs.phone} 
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input
                                    type="text"
                                    className="userUpdateInput"
                                    name="address"
                                    value={inputs.address} 
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img
                                    className="userUpdateImg"
                                    src="/img/person.jpg"
                                    alt=""
                                />
                                <label htmlFor="file">
                                    <Publish className="userUpdateIcon" />
                                </label>
                                <input type="file" id="file" style={{ display: "none" }} />
                            </div>
                            <button className="userUpdateButton" onClick={handleSubmit}>Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default User;
