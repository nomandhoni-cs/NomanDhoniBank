// Click on login button to hide login-area
var loginButton = document.getElementById("loginBtn");
loginButton.addEventListener("click", function () {
    const loginArea = document.getElementById("login-area")
    loginArea.style.display = "none";
    //Show Dashboard
    dashboardArea.style.display = "block";
    //change Webpage Title
    webpageTitle.innerHTML = "Dashboard";
});
// Dashboard Area
const dashboardArea = document.getElementById('dashboard');

//Change webpage title
const webpageTitle = document.getElementById('webpage-title');