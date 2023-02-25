let buttons=document.querySelectorAll("button")
let input=document.querySelector("input")
console.log(buttons)
for(let i=0;i<10;i=i+1){
	console.log("Привет")
}
console.log(buttons[0])
let Numbers=document.querySelectorAll(".Number")
for(let i=0;i<10;i=i+1){
	console.log(Numbers[i])
	Numbers[i].addEventListener("click",function number(){
	console.log(Numbers[i].innerHTML)
	input.value=input.value+Numbers[i].innerHTML
	})


}
console.log("40"+"5")
let operation=document.querySelectorAll(".operation")
for(let i=0;i<5;i=i+1){
	console.log(operation[i])
	operation[i].addEventListener("click",function operate(){
	
	if(operation[i].innerHTML=="."){
	}
	else{
		console.log(input.value[input.value.length-1])
		if(input.value[input.value.length-1]=='0' || input.value[input.value.length-1]=='2' || input.value[input.value.length-1]=='3'|| input.value[input.value.length-1]=='1'|| input.value[input.value.length-1]=='4'|| input.value[input.value.length-1]=='5'|| input.value[input.value.length-1]=='6'|| input.value[input.value.length-1]=='7'|| input.value[input.value.length-1]=='8'|| input.value[input.value.length-1]=='9'){
			input.value=input.value+operation[i].innerHTML
		}
	}
	})
}
let clear1=document.querySelector(".clear1")
clear1.addEventListener("click",function clean(){
input.value=""
})
let clear=document.querySelector(".clear")
console.log(clear1)
clear.addEventListener("click",function clean(){
input.value = input.value.substr(0,input.value.length-1)
console.log("Привет")
})
let result=document.querySelector(".result")
result.addEventListener("click",function resultation(){
	let res=eval(input.value)
	input.value=res
	console.log(res)
	if(input.value[input.value.length-1]=='.'||input.value[input.value.length-1]=="+"||input.value[input.value.length-1]=="-"||input.value[input.value.length-1]=="/"||input.value[input.value.length-1]=="*"){

	}
	else{
	let res=eval(input.value)
	input.value=res
	console.log(res)
	}
})


let a = 5+4*20/3
console.log(a)
