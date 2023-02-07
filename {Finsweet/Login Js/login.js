const loginForm = document.getElementById("form_login");
const userNameLogin = document.getElementById("username_login");
const passwordLogin = document.getElementById("password_login");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  request
    .post("auth/login", {
      username: userNameLogin.value,
      password: passwordLogin.value
    })
    .then((res) => {
      console.log(res.data.token);
      localStorage.setItem(TOKEN, res.data.token);
      window.location.href = "My_blogs.html";
    });
});

// this was done with fetch \\

// loginForm.addEventListener("submit" , (e) =>{
//   e.preventDefault()

//   // let username = username.value.trim();
//   // let password = password.value.trim()

//   let options = {
//       method: "POST",
//       headers:{
//          "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         username:userNameLogin.value,
//           password:passwordLogin.value,
//       })
//   }
//   fetch("https://blog-backend.up.railway.app/api/v1/auth/login",options)
//   .then(res => res.json())
//   .then(data => {
//       console.log(data);
//       if(data?.token){
//           console.log("lkelfi");
//           window.localStorage.setItem("token", data.token)

//           window.location.replace("Posts.html")
//       }
//   })

// });
