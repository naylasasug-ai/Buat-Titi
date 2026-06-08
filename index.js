// login page scripts
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  validateForm();
});

function validateForm() {
  var username = document.getElementById("tiara").value;
  var password = document.getElementById("tiara").value;

  //gunakan username tiara dan password tiara
  if (username === "tiara" && password === "tiara") {
    Swal.fire({
      icon: "success",
      title: "Login berhasil!",
      text: "Selamat datang MBG my bestie gweh hehehehe",
      showConfirmButton: false,
      timer: 1500,
    }).then(function () {
      window.location.href = "birthday.html";
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Login gagal!",
      text: "Coba cek lagi username sama passwordnya ya:)",
      confirmButtonText: "Coba lagi",
      confirmButtonColor: "#ff7675",
    });
  }
}
