const {ipcRenderer} = require("electron");


document.addEventListener("DOMContentLoaded", function() {

    const closeButton = document.getElementById("top-app-bar-button-close");


    closeButton.addEventListener("click" , () => {
        ipcRenderer.send("close");
    });

    const themeSwitcherButton = document.getElementById("theme-switcher");
    let currentTheme = localStorage.getItem("theme") || "light-theme";
    if (currentTheme === 'null') {
        document.body.classList.add('light-theme'); 
        localStorage.setItem('theme', 'light-theme');
    } else {
        document.body.classList.add(currentTheme); 
    }


    themeSwitcherButton.addEventListener("click", function() {
        console.log(document.body.classList);
        if (document.body.classList.contains("light-theme")) {
            document.body.classList.remove("light-theme");
            document.body.classList.add("dark-theme");    

            localStorage.setItem('theme',"dark-theme");
        } else {
            document.body.classList.remove("dark-theme");
            document.body.classList.add('light-theme');

            localStorage.setItem('theme', 'light-theme'); 
        }
    });


    function updateTime(){
        const timer = document.getElementById("timer");
        const now = new Date();
        timer.textContent = now.toLocaleTimeString();
    
    };

    updateTime();
    setInterval(updateTime,1000);
});
