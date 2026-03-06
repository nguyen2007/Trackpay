function withdrawMoney(){

const jar=document.getElementById("jarSelect").value
const amount=parseFloat(document.getElementById("withdrawAmount").value)

if(!amount || amount<=0){
alert("Enter valid amount")
return
}

if(totals[jar] < amount){
alert("Not enough money in this jar")
return
}

totals[jar] -= amount

updateUI()
updateChart()

}
