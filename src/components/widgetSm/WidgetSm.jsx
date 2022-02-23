import './widgetSm.css';
import { userRequest } from '../../utils';
import { useEffect, useState } from 'react';
import Visibility from '@material-ui/icons/Visibility';

const WidgetSm = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const getUsers = async () => {
            try {
                const res = await userRequest.get('users/?new=true');
                setUsers(res.data);
            } catch {}
        };
        getUsers();
    },[]);
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                {users.map((user) => (
                    <li className="widgetSmListItem" key={user._id}>
                        <img src={user.img || "img/client2.png"} alt="" className="widgetSmImg" />
                        <div className="widgetSmUser">
                            <span className="widgetSmUsername">{user.username}</span>
                            {/* <span className="widgetSmUserTitle">Software Engineer</span> */}
                        </div>
                        <button className="widgetSmButton"><Visibility className='widgetSmIcon'/> Display</button>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default WidgetSm;
