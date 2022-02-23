import './user.css';
import { Link } from 'react-router-dom';
import Publish from '@material-ui/icons/Publish';
import MailOutline from '@material-ui/icons/MailOutline';
import PhoneAndroid from '@material-ui/icons/PhoneAndroid';
import PermIdentity from '@material-ui/icons/PermIdentity';
import CalendarToday from '@material-ui/icons/CalendarToday';
import LocationSearching from '@material-ui/icons/LocationSearching';

const User = () => {
    return (
        <div className='user'>
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to='/newUser'>
                    <button className="userAddButtton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="/img/person.jpg" alt="" className="userShowImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Anne Awkadi</span>
                            <span className="userShowUserTitle">Software Engineering</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <div className="userShowTitle">Acount Details</div>
                        <div className="userShowInfo">
                            <PermIdentity className='userShowIcon'/>
                            <span className="userShowInfoTitle">annabeck99</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className='userShowIcon'/>
                            <span className="userShowInfoTitle">10.11.2021</span>
                        </div>
                        <div className="userShowTitle">Acount Details</div>
                        <div className="userShowInfo">
                            <PhoneAndroid className='userShowIcon'/>
                            <span className="userShowInfoTitle">+234728393827</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline className='userShowIcon'/>
                            <span className="userShowInfoTitle">kenneth@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearching className='userShowIcon'/>
                            <span className="userShowInfoTitle">Ilorin | Nigeria</span>
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
                                placeholder="annabeck99"
                                className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input
                                type="text"
                                placeholder="Anna Becker"
                                className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input
                                type="text"
                                placeholder="annabeck99@gmail.com"
                                className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input
                                type="text"
                                placeholder="+1 123 456 67"
                                className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input
                                type="text"
                                placeholder="New York | USA"
                                className="userUpdateInput"
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
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default User;
