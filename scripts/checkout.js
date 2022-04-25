// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

var moviesitems=JSON.parse(localStorage.getItem("movie"));

console.log(moviesitems)
let totalamount = JSON.parse(localStorage.getItem("amount"));
let wallet=document.getElementById("wallet")
wallet.innerText=totalamount;


function userdetails(event)
{
event.preventDefault();
alert("Insufficient Balance ! ");

setInterval(function()
 {
    
   
   
   alert("Booking Successful! ");
//    alert("Your order is in transit  ");
//    alert("Your order is out for delivery ");
//    alert("Order delivered")

   


 },1000)

}