import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis} from '@fortawesome/free-solid-svg-icons';

function Trend(props){
    let {trd} = props
    return(
        <div className="trend">
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <p>{trd.type}.Trending</p>
                <FontAwesomeIcon icon={faEllipsis} style={{color:`var(--paragraphsColor)`, cursor:"pointer"}}/>
            </div>
            <p className='name'>{trd.name}</p>
            <p>{trd.posts} Posts</p>
        </div>
    )
}
export default Trend;