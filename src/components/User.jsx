import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis} from '@fortawesome/free-solid-svg-icons';
function User(props){
    return(
        <div className="user">
            <img src={props.imgPath} alt="personal image"/>
            <div className="userInfo">
                <p className="userName">{props.name}</p>
                <p className="userEmail" title={props.email}>{props.email}</p>
            </div>
            <FontAwesomeIcon icon={faEllipsis} className='ellipsis'/>   
        </div>
    )
}
export default User;