const secondaryButtons = document.querySelectorAll("#btnContainer button");

secondaryButtons.forEach(btn => {
    btn.addEventListener("click", function(eve) {
        secondaryButtons.forEach(btn => {
            btn.classList.remove("btn-main");
            btn.classList.add("btn-inactive");
        })

        if(eve.target.classList.contains("btn-inactive")){
            eve.target.classList.remove("btn-inactive");
            eve.target.classList.add("btn-main");
        }
    })
})