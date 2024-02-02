number = Math.floor(Math.random() * 100);
console.log(number);
att = 1
function fun() {
    let nodi = document.getElementById("nodiv").value;
    if (number == nodi) {
        document.getElementById("attempt").innerHTML = `yes this is correct guess And the number of attempts you take are ${att}`
        document.getElementById("score").innerHTML = `Your Score ${att}`
        document.getElementById("attempt").style["color"]="green"
        document.getElementById("maindiv").style["display"]="none"
        document.getElementById("save").style["display"]="block"

    }
    else if (number > nodi) {
        document.getElementById("attempt").innerHTML = `your no is smaller then the actual And Number of attempts are ${att}`

    }
    else {
        document.getElementById("attempt").innerHTML = `your no is greather then the actual And Number of attempts are ${att}`
    }
    att++;
}

// hvalue=localStorage.getItem(1);
// console.log(hvalue)

function hScoree(){
hvalue=100;
for(let  i=1;i<=localStorage.length;i++){
    if(localStorage.getItem(i)<hvalue){
        hvalue=localStorage.getItem(i);
    }
}
return hvalue;
}


function aScoree(){
    Avalue=0;
    for(let  i=1;i<=localStorage.length;i++){
        let k=parseInt(localStorage.getItem(i));
       Avalue+=k;
    //    console.log(Avalue);
    }
    Avalue=Avalue/localStorage.length;
    return Avalue;
    }

document.getElementById("hScore").innerHTML=`High Score ${hScoree()}`;
document.getElementById("avgScore").innerHTML=`Avg Score  ${aScoree()}`;
document.getElementById("hhscore").innerHTML=`High Score ${hScoree()}`;
document.getElementById("aaverage").innerHTML=`Avg Score  ${aScoree()}`;



gamenumber = localStorage.length;
function save() {
    window.location.reload();
}


function save_restart(){
    // document.getElementById("maindiv").style["display"]="block"
    // document.getElementById("save").style["display"]="none"
    window.location.reload();
    localStorage.setItem(gamenumber + 1, att-1);

}

