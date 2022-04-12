// Click on login button to hide login-area
var loginButton = document.getElementById("loginBtn");
loginButton.addEventListener("click", function () {
  const loginArea = document.getElementById("login-area");
  loginArea.style.display = "none";
  //Show Dashboard
  dashboardArea.style.display = "block";
  //change Webpage Title
  webpageTitle.innerHTML = "Dashboard";
});
// Dashboard Area
const dashboardArea = document.getElementById("dashboard");

//Change webpage title
const webpageTitle = document.getElementById("webpage-title");

//Deposit and withdraw handler function
function updateSpanText(id, inputFloat) {
  //   Take value from deposit span tag
  const amount = document.getElementById(id).innerText;
  //and make that value into float
  //innerText value comes as a string
  const currentFloat = parseFloat(amount);
  const totalAmount = inputFloat + currentFloat;
  //Show total in deposit span
  document.getElementById(id).innerText = totalAmount;
}

//Deposit Button Handler
const depositButton = document.getElementById("depositButton");
depositButton.addEventListener("click", function () {
  // take value from input field
  const depositNumber = document.getElementById("depositNumber").value;
  //and make that value into float
  //input value comes as a string
  const depositFloat = parseFloat(depositNumber);

  updateSpanText("depositAmount", depositFloat);
  updateSpanText("balanceAmount", depositFloat);

  document.getElementById("depositNumber").value = "";
});

//Withdraw Button Handler
const withdrawButton = document.getElementById("withdrawButton");
withdrawButton.addEventListener("click", function () {
  // take value from input field
  const withdrawNumber = document.getElementById("withdrawNumber").value;
  //and make that value into float
  //input value comes as a string
  const withdrawFloat = parseFloat(withdrawNumber);

  updateSpanText("withdrawAmount", withdrawFloat);

  //Take value from withdraw span tag
  const balanceAmount = document.getElementById("balanceAmount").innerText;
  //and make that string into float
  //innerText value comes as a string
  const currentBalanceFloat = parseFloat(balanceAmount);
  const totalBalance = currentBalanceFloat - withdrawFloat;
  //Show total in Balance span
  document.getElementById("balanceAmount").innerText = totalBalance;
  document.getElementById("withdrawNumber").value = "";
  if (totalBalance < 0) {
    alert("You're in loan. Careful!!!");
  }
});
