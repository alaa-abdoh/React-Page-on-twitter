import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faEllipsis, faBell} from '@fortawesome/free-solid-svg-icons';
import Button from './Button'
function Profile(props){
    let {info} = props;
    return(
        <div className="profile">
            <div className="top">
                <FontAwesomeIcon icon={faArrowLeft} className='arrow' />
                <div>
                    <h3>{info.name}</h3>
                    <p>{info.postsNumber} Posts</p>
                </div>
            </div>
            <div className="coverPhoto" style={{backgroundImage:`url(${info.cover})`}} ></div>
            <div className="actions">
                <img src={info.profilePicture} alt="Profile Pic"/>
                <div>
                <FontAwesomeIcon icon={faEllipsis} className='actionIcon'/>
                <FontAwesomeIcon icon={faBell} className='actionIcon'/>
                <Button size="small" background="white" text="Follow"/>
                </div>
            </div>
        </div>
    )
}
export default Profile;