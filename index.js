const body = document.querySelector(".body");
const btnEl = document.querySelectorAll(".control");
const btnElCon  = document.querySelectorAll(".controls");
const pagesEl = document.querySelectorAll(".main-divs")

function pageloads(){
    for(let i = 0; i<btnEl.length; i++){
        let btnGotten = btnEl[i];
        btnGotten.addEventListener("click", function(){
            let currentBtn = document.querySelectorAll(".active-btn");
            currentBtn[0].classList = currentBtn[0].className.replace("active-btn", " ");
            this.className += " active-btn";
        })
    }

    body.addEventListener("click", (e)=>{
        const id = e.target.dataset.id;
        if(id){
            // this is to remove active from buttons;
            btnElCon.forEach((btn)=>{
                btn.classList.remove("active")
            })
            e.target.classList.add("active")

            //  this is to remove active from pages element
            pagesEl.forEach((page)=>{
                page.classList.remove("active")
            })
            const element = document.getElementById(id);
            element.classList.add("active")
        }
    })
}
pageloads()
