let currentBalance = parseFloat(document.getElementById("currentBalance").innerText);
let totalCollectedNoakhali = parseFloat(document.getElementById("totalCollectedNoakhali").innerText);
let totalCollectedFeni = parseFloat(document.getElementById("totalCollectedFeni").innerText);
let totalCollectedQuota = parseFloat(document.getElementById("totalCollectedQuota").innerText);

document.querySelectorAll("input").forEach(inputField => inputField.value = "");

const cards = document.getElementById("Cards");

cards.addEventListener("click", function(eve){
    if(eve.target.matches(".donateNowBtns")){
        handleDonations(eve.target);
    }
})

function handleDonations(btn){
    const inputFieldValue = btn.parentNode.children[0].value;
    if(inputFieldValue == ""){
        handleAlerts("-1");
        return;
    }
    for(const char of inputFieldValue){
        if(isNaN(char) || char == " "){
            handleAlerts("-1")
            return;
        }
    }

    const donationAmount = parseFloat(inputFieldValue);

    if(donationAmount > 0 && currentBalance >= donationAmount){
        if(btn.id == "donateToNoakhali"){
            totalCollectedNoakhali += donationAmount;
        } else if(btn.id == "donateToFeni"){
            totalCollectedFeni += donationAmount;
        } else if(btn.id == "donateToQuota"){
            totalCollectedQuota += donationAmount;
        }

        handleBalance(donationAmount);
        
        const title = btn.parentNode.parentNode.children[1].children[0].innerText;
        handleHistory(donationAmount, title);
        btn.parentNode.children[0].value = "";

        document.querySelector("#my_modal_5").showModal();
    }
    else if(donationAmount < 0){
        handleAlerts("-1");
    }else if(donationAmount > currentBalance){
        handleAlerts("-2");
    }
}


function handleHistory(donationAmount, title){
    const time = new Date();
    const newCard = document.createElement("div");
    newCard.classList.add("historyCard");
    newCard.innerHTML = `<h1>${donationAmount} Taka Donated to "${title}"</h1>
                         <p>Date: ${time}</p>`;
    document.querySelector("#historySection").prepend(newCard);                     
}

function handleBalance(donationAmount){
    currentBalance -= donationAmount;
    document.querySelector("#currentBalance").innerText = currentBalance;
    
    document.querySelector("#totalCollectedNoakhali").innerText =totalCollectedNoakhali;
    document.querySelector("#totalCollectedFeni").innerText = totalCollectedFeni;
    document.querySelector("#totalCollectedQuota").innerText = totalCollectedQuota;
}

function handleAlerts(code){
    if(code === "-1"){
        alert("Please Enter Valid Amount!");
    } else if(code === "-2"){
        alert("Not Enough Balance!");
    }
}