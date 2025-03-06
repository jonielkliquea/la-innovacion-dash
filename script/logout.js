import { userLogOut } from "/script/firebaseInit.js";

function checkToken() {
    const havefireBaseToken = localStorage.getItem('fireBaseToken');
    if (!havefireBaseToken) {
        userLogOut();
        console.log("Token no existe");
        window.location.href = "./index.html";
    } else {
        document.addEventListener("DOMContentLoaded", () => {
            const logoutButton = document.getElementById('logout');
            if (logoutButton) {
                logoutButton.style.display = "flex";
            }
        });
        console.log(havefireBaseToken);
    }
}

checkToken();
