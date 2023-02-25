import classes from './inp.module.css'
import C from '../button/button.js'
function Delphinator2000(props){
    console.log(classes)
    return(
            <input value={props.prop} className={classes.expression} disabled type="text" name=""></input>   
    )
}


export default Delphinator2000