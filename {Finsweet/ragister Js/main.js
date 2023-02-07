const registerForm = document.getElementById("registerForm");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const userName = document.getElementById("userName");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  request
    .post("auth/register", {
      first_name: firstName.value,
      last_name: lastName.value,
      password: password.value,
      username: userName.value
    })
    .then((res) => {
      localStorage.setItem(TOKEN, res.data.token)
      window.location.href = "Home.html";
    });
});


              // fetch \\

// registerForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   let options = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//       first_name: firstName.value,
//       last_name: lastName.value,
//       username: userName.value,
//       password: password.value
//     })
//   };
//   fetch("https://blog-backend.up.railway.app/api/v1/auth/register", options)
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       if (data?.token) {
//         console.log(data.token);
//         window.localStorage.setItem("token", data.token);

//         window.location.replace("Posts.html");
//       }
//     });
// });
