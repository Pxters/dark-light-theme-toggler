    var body = document.body;
    var moon = document.getElementById("moon")
    var header = document.getElementById("header")
    var isNightMode = true;
    window.onload = function Moon(){
        document.getElementById("moon").onclick = function Moon(){
            if (isNightMode === true){
                moon.classList.toggle("dark-mode");
                header.classList.toggle("dark-mode");
                body.classList.toggle("dark-mode-bg");
                moon.classList.replace("fa-moon", "fa-sun");
                isNightMode = false;
            }
            else if (isNightMode === false){
                moon.classList.remove("dark-mode");
                header.classList.remove("dark-mode");
                body.classList.remove("dark-mode-bg");
                moon.classList.replace("fa-sun", "fa-moon");
                isNightMode = true;
            }
        }
    }
