function Btn(props){
    return(
        <button style={{width:props.size =="large"?"180px":"60px",
            background:props.background == "blue" ? "#1d9bf0" : "white",
            color:props.background =="blue" ? "white" : "black" }}>
            {props.text}
        </button>
        
    )
}
export default Btn;