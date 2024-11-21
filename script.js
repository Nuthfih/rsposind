//Alert
function Alert() {
    alert(`Layanan belum tersedia`);
  }


//Form Pendaftaran
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Mencegah submit default
    const email = document.getElementById("floating_email").value;
    const password = document.getElementById("floating_password").value;
    const repeatPassword = document.getElementById("floating_repeat_password").value;

    if (password !== repeatPassword) {
        alert("Password tidak cocok!");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        alert("Email tidak valid!");
    } else {
        alert("Form berhasil dikirim!");
        this.submit(); // Kirim form setelah validasi berhasil
    }
});

function submitAlert() {
    setTimeout(() => {
        alert("Terima kasih, data Anda telah dikirim!");
    }, 500);
}
