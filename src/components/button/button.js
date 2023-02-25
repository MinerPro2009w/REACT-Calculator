
import './button.css'
function button(props){
    return(
        <button onClick={function(){
            props.buttons(props.sign)
        }}>{props.sign}</button>
    )
}
export default button