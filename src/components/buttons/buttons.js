import Button from './../button/button.js'
import './buttons.css'
function buttons(props1){
    let buttonsAll=[
        {sign:"C",numb:props1.clearProperty},{sign:"CE",numb:props1.clearOneProperty},{sign:"1",numb:props1.numb},{sign:"2",numb:props1.numb},{sign:"3",numb:props1.numb},
        {sign:"4",numb:props1.numb},{sign:"5",numb:props1.numb},{sign:"6",numb:props1.numb},{sign:"7",numb:props1.numb},
        {sign:"8",numb:props1.numb},{sign:"9",numb:props1.numb},{sign:"0",numb:props1.numb},
        {sign:"+",numb:props1.AllOperations},
        {sign:"-",numb:props1.AllOperations},
        {sign:"*",numb:props1.AllOperations},
        {sign:"/",numb:props1.AllOperations},
         
        {sign:"=",numb:props1.equalsClick}     
    ]
    let buttonsC=buttonsAll.map(function(value,index,array){
        return(
            <Button key={index} buttons={value.numb} sign={value.sign}></Button>
        )

    })
    return(
        <div className="buttons">
            {buttonsC}
        </div>
    )
}
// let properties = {
//     buttons:
//     sign:
// }
// button(peoperties)





export default buttons