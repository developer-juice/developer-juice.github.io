var urlParams = new URLSearchParams(window.location.search);
if(urlParams.has("secret")){
  if( urlParams.get("secret") != "3.1415926535"){
    alert("you do not have the correct secret key");
    window.location="../index.html";
  }
}
else{
  alert("you do not even 1 secret key");
  window.location="../index.html";
}
