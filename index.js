let nummer = ""


function knapp(num){
    document.getElementById("textInput").value += num
    nummer += num
}

function symbol(symbol){
    nummer += symbol
    document.getElementById("textInput").value = ""
    document.getElementById("textInput").placeholder = symbol
}

function results(){
    document.getElementById("textInput").value = eval(nummer)
    document.getElementById("textInput").placeholder = "0"
}



function reset(){
    document.getElementById("textInput").value = ""
    nummer = ""
}



