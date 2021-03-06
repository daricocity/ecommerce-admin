import './newUser.css';

const NewUser = () => {
    document.title = 'Wolmart | Add User';
    return (
        <div className='newUser'>
            <h1 className="newUserTitle">New User</h1>
            <form action="" className="newUserForm">
                <div className="newUserItem">
                    <label>Username</label>
                    <input type='text' placeholder='John' />
                </div>
                <div className="newUserItem">
                    <label>Full Name</label>
                    <input type='text' placeholder='John Goe' />
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input type='email' placeholder='john@gmail.com' />
                </div>
                <div className="newUserItem">
                    <label>Password</label>
                    <input type='password' placeholder='password' />
                </div>
                <div className="newUserItem">
                    <label>Phone</label>
                    <input type='text' placeholder='+2348055689337' />
                </div>
                <div className="newUserItem">
                    <label>Address</label>
                    <input type='text' placeholder='Ilorin | Nigeria' />
                </div>
                <div className="newUserItem">
                    <label>Gender</label>
                    <div className="newUserGender">
                        <input type='radio' name='gender' value='male' id='male' />
                        <label for='male'>Male</label>
                        <input type='radio' name='gender' value='female' id='female' />
                        <label for='female'>Female</label>
                        <input type='radio' name='gender' value='other' id='other' />
                        <label for='other'>Other</label>
                    </div>
                </div>
                <div className="newUserItem">
                    <label>Active</label>
                    <select name="active" id="active" className="newUserSelect">
                        <option value='yes'>Yes</option>
                        <option value='no'>No</option>
                    </select>
                </div>
                <button className="newUserButton">Create</button>
            </form>
        </div>
    )
};

export default NewUser;
