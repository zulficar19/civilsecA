
document.getElementById("searchBar").addEventListener("input", function() {
    const query = this.value.toLowerCase();
    const profile = document.querySelector(".profile-card");
    const name = profile.querySelector("p").textContent.toLowerCase();
    profile.style.display = name.includes(query) ? "block" : "none";
});
