function More(){
    let links =[{id:1, name :"Term of services"},
    {id:2, name :"Term of services"}, 
    {id:3, name :"Privacy Policy"},
    {id:4, name :"Accessibility"},
    {id:5, name :"Ads info"}]
    return(
        <div className="moreLinks">
            {
                links.map((link)=>{
                    return (<a key={link.id} href="#">{link.name}</a>)
                })
            }
        </div>
    )
}
export default More;