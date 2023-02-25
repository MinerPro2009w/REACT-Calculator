import Buttons from './../buttons/buttons.js'
import classes from './Calc.module.css'
import Exp from './../input/inp.js'
import {useState} from "react"
function Delphinator2000(){
    let [value,setValue]=useState("")
    function insertNumber(numbClick){
        setValue(value+numbClick)
    }
    function clear(){
        setValue("")
    }
    function equals(){
        setValue(eval(value))
    }
    function clearOneSymbol(){
        setValue(value.substr(0,value.length-1))
    }
    function operation(sign){
        setValue(value+sign)

    }
    return(
        <div className = {classes.Calc}>
            <Exp prop={value}></Exp>
            <Buttons equalsClick={equals} AllOperations={operation} clearOneProperty={clearOneSymbol} clearProperty={clear} numb={insertNumber}></Buttons>
        </div>
        
    )
}


export default Delphinator2000