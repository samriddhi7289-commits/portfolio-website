const themeToggle =
document.getElementById("themeToggle");

if(themeToggle){

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        if(document.body.classList.contains("dark-mode")){

            themeToggle.innerHTML = "☀️";

        }else{

            themeToggle.innerHTML = "🌙";

        }

    });

}