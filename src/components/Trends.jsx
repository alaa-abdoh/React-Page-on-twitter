import Trend from "./Trend";
function Trends(){
    let trends = [
        {
            id : 1,
            type:"Gaming",
            name : "#VALORANTchampions",
            posts: "27.9k"
        },
        {
            id : 2,
            type:"Gaming",
            name : "#Fifa",
            posts: "60k"
        },
        {
            id : 3,
            type:"Holy",
            name : "islam sobhy",
            posts: "250k"
        },
        {
            id : 4,
            type:"Sport",
            name : "Cristiano Ronaldo",
            posts: "130k"
        },
        {
            id : 5,
            type:"Sport",
            name : "#elClassico",
            posts: "70.4k"
        },
    ]
    return(
        <div className="trends">
            <h3>Trends For You</h3>
            {
                trends.map((tr)=>{
                    return <Trend key={tr.id} trd={tr}/>
                })
            }
        </div>
    )
}
export default Trends;