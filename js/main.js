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

//Deposit Button Handler
const depositButton = document.getElementById("depositButton");
depositButton.addEventListener("click", function () {
  // take value from input field
  const depositNumber = document.getElementById("depositNumber").value;
  //and make that value into float
  //input value comes as a string
  const depositFloat = parseFloat(depositNumber);

  //   Take value from deposit span tag
  const depositAmount = document.getElementById("depositAmount").innerText;
  //and make that value into float
  //innerText value comes as a string
  const currentDepositFloat = parseFloat(depositAmount);
  const totalDeposit = depositFloat + currentDepositFloat;
  //Show total in deposit span
  document.getElementById("depositAmount").innerText = totalDeposit;

  //Take value from deposit span tag
  const balanceAmount = document.getElementById("balanceAmount").innerText;
  //and make that string into float
  //innerText value comes as a string
  const currentBalanceFloat = parseFloat(balanceAmount);
  const totalBalance = depositFloat + currentBalanceFloat;
  //Show total in Balance span
  document.getElementById("balanceAmount").innerText = totalBalance;
});

//Withdraw Button Handler
const withdrawButton = document.getElementById("withdrawButton");
withdrawButton.addEventListener("click", function () {
  // take value from input field
  const withdrawNumber = document.getElementById("withdrawNumber").value;
  //and make that value into float
  //input value comes as a string
  const withdrawFloat = parseFloat(withdrawNumber);

  //   Take value from withdraw span tag
  const withdrawAmount = document.getElementById("withdrawAmount").innerText;
  //and make that value into float
  //innerText value comes as a string
  const currentWithdrawFloat = parseFloat(withdrawAmount);
  const totalWithdraw = withdrawFloat + currentWithdrawFloat;
  //Show total in withdraw span
  document.getElementById("withdrawAmount").innerText = totalWithdraw;

  //Take value from withdraw span tag
  const balanceAmount = document.getElementById("balanceAmount").innerText;
  //and make that string into float
  //innerText value comes as a string
  const currentBalanceFloat = parseFloat(balanceAmount);
  const totalBalance = currentBalanceFloat - withdrawFloat;
  //Show total in Balance span
  document.getElementById("balanceAmount").innerText = totalBalance;
  if (totalBalance < 0) {
    alert("You're in loan. Becareful!!!");
  }
});
