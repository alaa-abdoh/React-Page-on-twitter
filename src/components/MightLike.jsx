import LikePages from "./LikePages";

function MightLike(props){
    let {pages} = props
    return(
        <div className="might">
            <h3>You Might Like</h3>
            {pages.map((page)=>{
                return <LikePages key={page.id} pg={page}/>
            })}
        </div>
    )
}
export default MightLike;