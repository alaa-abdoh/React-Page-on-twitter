import authorImg from "../images/postimg.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faComment, faRetweet, faHeart, faChartSimple, faArrowUpFromBracket} from '@fortawesome/free-solid-svg-icons';
function Posts(){
    let posts =[{
            id : 1,
            img : authorImg,
            name : "Mohammed Kareem",
            name2 : "@moha_K22",
            data : "May 29",
            content : "this is post content",
            comments : 46,
            shares : 675,
            likes : 3701,
            statistics : "1.1M" 
        }, {
            id : 2,
            img : authorImg,
            name : "Moneer Saleem",
            name2 : "@mon_SAL1",
            data : "May 1",
            content : "this is content for post number 2",
            comments : 116,
            shares : 24,
            likes : 547,
            statistics : "500K"
        }
    ]
    return(
        <div className="posts">
            {
                posts.map((post)=>{
                    return (
                        <div className="post" key={post.id}>
                            <img src={authorImg} alt="profilePicture"/>
                            <div className="info">
                                <div className="header">
                                    <div>
                                        <h3 className="name">{post.name}</h3>
                                        <p className="name2">{post.name2}</p>
                                        <span>. {post.data}</span>
                                    </div>
                                    <FontAwesomeIcon icon={faEllipsis} style={{cursor:"pointer", color:`var(--paragraphsColor)`}}/>   
                                </div>
                                <p className="postContent">{post.content}</p>
                                <div className="footer">
                                    <div className="comments">
                                        <FontAwesomeIcon icon={faComment}/>
                                        <span>{post.comments}</span>
                                    </div>
                                    <div className="shares">
                                        <FontAwesomeIcon icon={faRetweet}/>
                                        <span>{post.shares}</span>
                                    </div>
                                    <div className="likes">
                                        <FontAwesomeIcon icon={faHeart}/>
                                        <span>{post.likes}</span>
                                    </div>
                                    <div className="statistics">
                                        <FontAwesomeIcon icon={faChartSimple}/>
                                        <span>{post.statistics}</span>
                                    </div>
                                    <FontAwesomeIcon icon={faArrowUpFromBracket} style={{cursor:"pointer"}}/>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Posts;