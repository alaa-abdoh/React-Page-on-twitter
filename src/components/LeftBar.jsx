import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faHome, faMagnifyingGlass, faBell, faMessage,
        faRectangleList, faBookmark, faUserGroup, faUser, faCircleDot    } from '@fortawesome/free-solid-svg-icons';
import Btn from './Button';
import User from './User';
import user from "../images/user.jpg"
function LeftBar(){
    return(
        <div className="leftSide">
            <div className="topPart">
                <FontAwesomeIcon icon={faX} className='Xicon'/>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faHome}/>   
                        <a href="">Home</a>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faMagnifyingGlass}/>   
                        <a href="">Explore</a>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faBell}/>   
                        <a href="">Notifications</a>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faMessage}/>   
                        <a href="">Messages</a>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faRectangleList}/>   
                        <a href="">Lists</a>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faBookmark}/>   
                        <a href="">BookMarks</a>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faUserGroup}/>   
                        <a href="">Communities</a>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faUser}/>   
                        <a href="">Profile</a>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faCircleDot}/>   
                        <a href="">More</a>
                    </li>
                </ul>
                <Btn size="large" background="blue" text="Post" />
            </div>
            <User imgPath={user} name="Alaa Abdoh" email="alaajabdoh1701@gmail.com" />
        </div>
    )
}
export default LeftBar;