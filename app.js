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
    if (error) {
      Swal.fire({
        icon: "error",
        title: "Signup Failed",
        text: error.message
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Signup Successful"
      }).then(() => {
        window.location.href = "login.html";
      });
    }

  } catch (error) {
    console.log(error);
  }
}


async function login() {

  var loginEmail = document.getElementById("login-email").value;
  var loginPass = document.getElementById("login-password").value;

  console.log(loginEmail, loginPass);

  if (loginEmail === "" || loginPass === "") {
    Swal.fire({
      icon: "warning",
      title: "Empty Fields",
      text: "Please enter email and password"
    });
    return;
  }

  try {

    const { data, error } = await supabase.auth.signInWithPassword({
      email: loginEmail,
      password: loginPass
    });

    console.log(data);

    if (error) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: error.message
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "Welcome back!"
      }).then(() => {
        window.location.href = "local.storage.html";
      });
    }

  } catch (error) {
    console.log(error);
  }

}












function tosignup() {
  window.location.href = "signup.html"
}
function tologin() {
  window.location.href = "login.html"
}
