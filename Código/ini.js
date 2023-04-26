document.querySelector('#entrar').addEventListener('click', entrar);

function entrar() {
  var
    sUserNameInicio = '',
    sPasswordInicio = '';

  sUserNameInicio = document.querySelector('#username').value;
  sPasswordInicio = document.querySelector('#password').value;

  localStorage.setItem("user", sUserNameInicio);
  localStorage.setItem("password", sPasswordInicio);
}