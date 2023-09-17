import SinglePage from "./SinglePage";
function WhoToFollow(props){
    let pages = props.pages;
    return(
       <div className="pages">
        <h3>Who To Follow ?</h3>        
            {
                pages.map((page)=>{
                    return <SinglePage key={page.id} pg={page}/>
                })
            }
       </div>
    )
}
export default WhoToFollow;