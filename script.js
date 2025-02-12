document.getElementById("lead-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let country = document.getElementById("country").value;

    if (name === "" || email === "" || phone === "") {
        alert("Please fill in all fields!");
        return;
    }

    alert(`Thank you! Our team will contact you soon regarding MBBS in ${country}.`);
    this.reset();
});
