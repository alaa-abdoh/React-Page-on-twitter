import Btn from "./Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck} from '@fortawesome/free-solid-svg-icons';
function LikePages(props){
    const {pg} = props 
    return(
        <div className="onePage">
            <img src={pg.photo} alt="profile picture"/>
            <div className="cont">
                <div>
                    <div>
                        <div style={{display:"flex", alignItems:"center"}}>
                            <h4>{pg.name}</h4>
                            {pg.Verified ? <FontAwesomeIcon icon={faCircleCheck} className="verified" /> : null }
                        </div>
                        <p className="name2">{pg.name2}</p>
                    </div>
                    <Btn size="small" background="white" text="Follow"/>
                </div>
            </div>
        </div>
    )
}
export default LikePages;