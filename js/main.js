let elLoginForm = document.querySelector(".login-form")

elLoginForm.addEventListener("submit", (evt) =>{
    evt.preventDefault();
    const userData ={
        username:evt.target.username.value,
        password:evt.target.password.value
    }
    if(userData.username == "saidkomil" && userData.password == "123"){
        window.localStorage.setItem("userData", JSON.stringify(userData))
        setTimeout(() =>{
            location.pathname = "../admin.html"
        },500)
    }
    else{
        alert("Incorrect username or password")
    }
})