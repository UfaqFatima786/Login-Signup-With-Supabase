var supabase = window.supabase.createClient('https://bfyvfcxnvitkflwnxjbh.supabase.co', 'sb_publishable_BPHA0WjK-KwtGQ4UqNy8Zw_Vwx-RBih')

async function signup() {
  var signupEmail = document.getElementById("signup-email").value;
  var signupPassword = document.getElementById("signup-password").value;
  console.log(signupEmail, signupPassword);

  if (signupEmail == "" || signupPassword == "") {
    Swal.fire({
      icon: "warning",
      title: "Missing Fields",
      text: "Please enter email and password"
    });
    return;
  }
  try {
    const { data, error } = await supabase.auth.signUp({ email: signupEmail, password: signupPassword });
    console.log(data);
    if (error) console.log(error);

  } catch (error) {
    console.log(error);
  }
}
window.location.href = "login.html";
// localStorage.setItem("email", signupEmail);
// localStorage.setItem("password", signupPassword);

// Swal.fire({
//   icon: "success",
//   title: "Signup Successful",
//   text: "Account created!"
// });
// setTimeout(() => {
//   window.location.href = "login.html";
// }, 1500);
// }


async function login() {

  var email = document.getElementById("login-email").value;
  var password = document.getElementById("login-password").value;
  console.log(email, password);


  if (email === "" || password === "") {
    Swal.fire({
      icon: "warning",
      title: "Empty Fields",
      text: "Please enter email and password"
    });
    return;
  }

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })
    console.log(data);

    if (error) {
      console.log(error);
      alert(error.message)
    } else {
      alert("Login Successful")
    }

  } catch (error) {
    console.log(error);
  }
  // var storedEmail = localStorage.getItem("email");
  // var storedPassword = localStorage.getItem("password");

  if (email === storedEmail && password === storedPassword) {
    Swal.fire({
      icon: "success",
      title: "Login Successful",
      text: "Welcome back!"
    });

    window.location.href = "local.storage.html";



  } else {
    Swal.fire({
      icon: "error",
      title: "Wrong Email and Password",
      text: "Please check your email and password"
    });
  }
}













function tosignup() {
  window.location.href = "signup.html"
}
function tologin() {
  window.location.href = "login.html"
}
