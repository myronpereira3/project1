// Store the wallet amount to your local storage with key "amount"
let query=(id)=>{
    return document.querySelector(id).value;
}
let tamount=JSON.parse(localStorage.getItem("amount"))||0;
document.querySelector("#wallet").innerText=tamount;
//console.log(typeof paise)
let walletfun=()=>{
    let amount=query("#amount")
    //console.log(paise);
    tamount+=Number(amount);
    localStorage.setItem("amount",JSON.stringify(tamount));

    document.querySelector("#wallet").innerText=tamount;
}


