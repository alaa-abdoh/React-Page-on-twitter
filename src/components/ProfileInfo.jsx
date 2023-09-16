import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faCalendarDays} from '@fortawesome/free-solid-svg-icons';
function ProfileInfo(props){
    let {info} = props;
    return(
        <div className="profileInfo">
            <h3>{info.name}</h3>
            <p className='nickName'>{info.name2}</p>
            <p className='description'>{info.description}</p>
            <div className='flex'>
                <div>
                    <FontAwesomeIcon icon={faLink}/>
                    <a href=''>{info.link}</a>
                </div>
                <div>
                    <FontAwesomeIcon icon={faCalendarDays}/>
                    <p>joined {info.joinedDate}</p>
                </div>
            </div>
            <div className='follow'>
                <p>{info.Following} <span>Following</span></p>
                <p>{info.Followers} <span>Followers</span></p>
            </div>
        </div>
    )
}
export default ProfileInfo;