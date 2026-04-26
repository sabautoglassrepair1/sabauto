document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // BOOKING SYSTEM (WHATSAPP)
    // =========================
    const form = document.getElementById("contact-form");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            let name = document.getElementById("name").value;
            let phone = document.getElementById("phone").value;
            let service = document.getElementById("service").value;
            let location = document.getElementById("location").value;

            let message =
                "🚗 NEW BOOKING REQUEST%0A%0A" +
                "Name: " + name + "%0A" +
                "Phone: " + phone + "%0A" +
                "Service: " + service + "%0A" +
                "Location: " + location;

            let url = "https://wa.me/2348038566271?text=" + message;

            window.open(url, "_blank");
        });
    }

    // =========================
    // COOKIE SYSTEM (PREMIUM)
    // =========================
    const cookieBanner = document.getElementById("cookieBanner");

    if (!localStorage.getItem("cookiesChoice") && cookieBanner) {
        setTimeout(() => {
            cookieBanner.classList.add("show");
        }, 1000);
    }

    // =========================
    // POPUP OFFER (DISCOUNT)
    // =========================
    if (!sessionStorage.getItem("offerShown")) {
        setTimeout(() => {
            alert("🔥 Get 10% OFF your first windscreen repair today!");
            sessionStorage.setItem("offerShown", "true");
        }, 4000);
    }

});


// =========================
// COOKIE FUNCTIONS
// =========================
function acceptCookies() {
    localStorage.setItem("cookiesChoice", "accepted");

    const banner = document.getElementById("cookieBanner");
    if (banner) {
        banner.classList.remove("show");
    }
}

function rejectCookies() {
    localStorage.setItem("cookiesChoice", "rejected");

    const banner = document.getElementById("cookieBanner");
    if (banner) {
        banner.classList.remove("show");
    }
}