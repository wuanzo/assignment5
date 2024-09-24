const btnContainer = document.querySelector("#btnContainer");

btnContainer.addEventListener("click", function(eve){
    if(eve.target.classList.contains("btn-inactive")){
        const allBtns = document.querySelectorAll("#btnContainer button");
        allBtns.forEach(btn => {
            btn.classList.remove("btn-main");
            btn.classList.add("btn-inactive");
        })
        eve.target.classList.remove("btn-inactive");
        eve.target.classList.add("btn-main");
    }
})