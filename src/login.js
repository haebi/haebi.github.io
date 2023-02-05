// #2 Login
const LOGIN_KEY = "LOGIN";
const loginForm = document.querySelector("#login-form");

function getLoginInfo()
{
  const userName = localStorage.getItem(LOGIN_KEY);

  if (userName !== null)
  {
    const loginnk = document.querySelector("#login-nk");
    const loginok = document.querySelector("#login-ok");
    const todoList = document.querySelector("#todo-list");
  
    loginnk.classList.add("hidden");
    loginok.classList.remove("hidden");
    todoList.classList.remove("hidden");
  
    loginok.outerText = `Hello, ${userName}!`;
  }

  return;
}

function onLoginSubmit(event)
{
  event.preventDefault();

  const userName = document.querySelector("#id_username");

  localStorage.setItem(LOGIN_KEY, userName.value);

  getLoginInfo();

  return;
}

loginForm.addEventListener("submit", onLoginSubmit);

getLoginInfo();