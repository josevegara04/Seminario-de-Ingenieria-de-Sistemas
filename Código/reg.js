document.querySelector('#registrar').addEventListener('click', registrar);

function registrar() {
  var
    sUserName = '',
    sEmail = '',
    sPassword = '';

  sUserName = document.querySelector('#username').value;
  sEmail = document.querySelector('#email').value;
  sPassword = document.querySelector('#password').value;

  localStorage.setItem("user", sUserName);
  localStorage.setItem("password", sPassword);
  localStorage.setItem("email", sEmail);

  console.log(localStorage);
  if((sUserName != null && sUserName != 'Undefined')||(sPassword != null && sPassword != 'Undefined')||(sEmail != null && sEmail != 'Undefined')){
    window.location="ini.html";
  }
  

}