function getNumber(num){
    var result= document.getElementById("result");
    result.value += num;
}
function getOperator(opt){
    var result= document.getElementById("result");
    result.value += opt;
}
function clearResult(){
    var result= document.getElementById("result");
    result.value ="";
}
function getResult(){
    var result= document.getElementById("result");
    console.log(result.value)
    result.value = eval(result.value)
}
