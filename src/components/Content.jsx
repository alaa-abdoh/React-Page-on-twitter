import Profile from "./Profile";
import profilePicture from "../images/profilePicture.png";
import coverPicture from "../images/cover.jpg"
import ProfileInfo from "./ProfileInfo"
import Links from "./Links"
function Content(){
    let profile ={
        name : "React",
        postsNumber : 2611,
        profilePicture :profilePicture,
        cover : coverPicture,
        name2 : "@Reactjs",
        description : "The library for web and native user interfaces",
        link : "react.dev",
        joinedDate : "June 2013",
        Following : 267,
        Followers : "708.1K"
    }
    return(
        <div className="content">
            <div className="mid">
                <Profile info={profile}/>
                <ProfileInfo info={profile}/>
                <Links/>
            </div>
            <div className="right">
                right side bar
            </div>
        </div>
    )
}
export default Content;