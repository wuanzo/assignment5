let currentBalance = parseFloat(document.getElementById("currentBalance").innerText);
let totalCollectedNoakhali = parseFloat(document.getElementById("totalCollectedNoakhali").innerText);
let totalCollectedFeni = parseFloat(document.getElementById("totalCollectedFeni").innerText);
let totalCollectedQuota = parseFloat(document.getElementById("totalCollectedQuota").innerText);

const cards = document.getElementById("Cards");

cards.addEventListener("click", function(eve){
    if(eve.target.matches("button")){
        handleDonations(eve.target)
    }
})

function handleDonations(target){
    const donationAmount = parseFloat(target.parentNode.children[0].value);
    if(target.id = "donateToNoakhali"){
        totalCollectedNoakhali += donationAmount;

        console.log(totalCollectedNoakhali);
    }
}