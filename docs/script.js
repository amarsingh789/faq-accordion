const questions = document.querySelectorAll(".question");

questions.forEach(q => {
    q.addEventListener("click", ()=> {
        const answer = q.nextElementSibling;
        const icon = q.querySelector("img");

        //check agar already open hai
        const isOpen = !answer.classList.contains("hidden");

        //sab answer close karo & icon reset karo
        document.querySelectorAll(".answer").forEach((ans) => ans.classList.add("hidden"));
        document.querySelectorAll(".question img").forEach((icon) => {
            icon.src = "assets/images/icon-plus.svg"
        });
        //agar already open nhi tha to isko open karo
        if(!isOpen){
            answer.classList.remove("hidden");
            icon.src = "assets/images/icon-minus.svg";
        }
    });
})