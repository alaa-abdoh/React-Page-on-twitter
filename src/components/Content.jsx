import Profile from "./Profile";
import profilePicture from "../images/profilePicture.png";
import coverPicture from "../images/cover.jpg"
import tailwind from "../images/tailwind.png"
import typeScript from "../images/typeScript.png"
import freCode from "../images/freCode.jpg"
import ProfileInfo from "./ProfileInfo"
import Links from "./Links"
import Posts from "./Posts"
import WhoToFollow from "./WhoToFollow";

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
    let toFollow =[
        {
            id : 1,
            Verified : true,
            photo : tailwind,
            name : "tailwind CSS",
            name2 : "@tailwindcss",
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem officia in a cupiditate error voluptates?"
        },
        {
            id : 2,
            Verified : false,
            photo : typeScript,
            name : "typeScript",
            name2 : "@typeScript",
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem officia in a cupiditate error voluptates?"
        },
        {
            id : 3,
            Verified : true,
            photo : freCode,
            name : "freeCodeCamp.org",
            name2 : "@freeCodeCamp",
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem officia in a cupiditate error voluptates?"
        }
    ]
    return(
        <div className="content">
            <div className="mid">
                <Profile info={profile}/>
                <ProfileInfo info={profile}/>
                <Links/>
                <Posts/>
                <WhoToFollow pages = {toFollow}/>
            </div>
            <div className="right">
                right side bar
            </div>
        </div>
    )
}
export default Content;