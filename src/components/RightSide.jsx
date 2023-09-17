import Search from "./Search";
import MightLike from "./MightLike"
import Trends from "./Trends"
import More from "./More"

function RightSide(props){
    let pages = props.pages;
    return(
            <>
                <Search/>
                <MightLike pages={pages}/>
                <Trends/>
                <More/>
            </>
    )
}
export default RightSide;