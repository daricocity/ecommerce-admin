import './topbar.css';
import Settings from '@material-ui/icons/Settings';
import Language from '@material-ui/icons/Language';
import NotificationsNone from '@material-ui/icons/NotificationsNone';

const Topbar = () => {
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">
                        <img src='/img/logo.png' alt=''/>
                    </span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings/>
                    </div>
                    <img src="/img/person.jpg" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
};

export default Topbar;
