let nameInput = document.querySelector("#name");
let emailInput = document.querySelector("#email");
let passwordInput = document.querySelector("#password");

function signUp() {
  let users = JSON.parse(localStorage.getItem("User")) || [];
  console.log(users);

  let existingUser = users.find((duplicate) => {
    return duplicate.name === nameInput.value && duplicate.email === emailInput.value;
  });

  if (existingUser) {
    alert(`${existingUser.email} email has already taken!`);
    return;
  }

  if (nameInput.value && emailInput.value && passwordInput.value) {
    users.push({
      name: nameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
    });

    localStorage.setItem("User", JSON.stringify(users));
    window.location.href = "signin.html";
  } else {
    alert("All Field are required!");
  }
}

function signIn() {
  let users = JSON.parse(localStorage.getItem("User")) || [];

  let user1 = users.find((user) => {
    return (
      user.email === emailInput.value && user.password === passwordInput.value
    );
  });

  if (user1) {
    localStorage.setItem("loggedInUser", JSON.stringify(user1));
    window.location.href = "home.html";
  } else {
    alert(`credentials are not correct`);
  }
}

function home() {
  let homeHeading = document.querySelector("#homeHeading");

  let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")) || " ";

  homeHeading.innerHTML = `${loggedInUser.name || ""} Welcome to Home Page!`;

  let logoutBtn = document.querySelector("#indexbtn");
  logoutBtn.addEventListener("click", function () {
    console.log("logoutbutton");
    // let loggedInUser = localStorage.getItem(JSON.parse(loggedInUser))
    localStorage.removeItem("loggedInUser");
    window.location.href = 'index.html'
  });
}

home();


function signUpPage(){
  window.location.href = 'signup.html'
}

function logInPage(){
  window.location.href = 'signin.html'
}


function btnClose(){
  let container = document.querySelector("#container");
  container.style.display = "none"
}

function homeClose(){
  // localStorage.getItem()
  window.location.href = "index.html"
}

function togglePassword(){

  let toogleIcon = document.querySelector("#tooglePassword")

  if(passwordInput.type === "password"){
    passwordInput.type = "text"
    toogleIcon.classList.remove("fa-eye-slash")
    toogleIcon.classList.add("fa-eye")
  }else{
    passwordInput.type = "password"
    toogleIcon.classList.remove("fa-eye")
    toogleIcon.classList.add("fa-eye-slash")
  }
}