const historyBtn = document.getElementById("historyBtn");
const donationBtn = document.getElementById("donationBtn");
const historySection = document.getElementById("historySection");

historyBtn.addEventListener("click", function() {
    cards.style.display = "none";
    historySection.style.display = "flex";
})

donationBtn.addEventListener("click", function(){
    cards.style.display = "flex";
    historySection.style.display = "none";
})



