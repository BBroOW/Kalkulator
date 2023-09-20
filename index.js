let nummer = ""
let log = []

function viewLog(){

    document.getElementById("liste").innerHTML = ""
        log.map((
            logi
        ) =>{
            const el = document.createElement("li")
            el.style.textAlign = "center"
            el.innerText = logi.nummer + "=" + logi.result

            document.getElementById("liste").appendChild(el)
        })

}
    

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
    log.push(
        {
            result:eval(nummer), tid:new Date(), nummer
        }
    )
    viewLog()
    console.log(log)
}



function reset(){
    document.getElementById("textInput").value = ""
    document.getElementById("textInput").placeholder = "0"
    nummer = ""
}



console.log(log)