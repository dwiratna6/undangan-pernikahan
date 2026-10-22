const cover = document.getElementById("cover");
const invitation = document.getElementById("invitation");
const openButton = document.getElementById("openInvitation");
const musicToggle = document.getElementById("musicToggle");
const weddingMusic = document.getElementById("weddingMusic");

openButton.addEventListener("click", async function () {
  cover.classList.add("hidden");
  invitation.classList.remove("hidden");
  musicToggle.classList.remove("hidden");

  window.scrollTo({ top: 0, behavior: "smooth" });

  try {
    await weddingMusic.play();
    musicToggle.classList.add("playing");
    musicToggle.textContent = "♫";
    musicToggle.setAttribute("aria-label", "Hentikan musik");
  } catch (error) {
    // Jika file musik belum tersedia, undangan tetap dapat digunakan.
    musicToggle.classList.remove("playing");
    musicToggle.textContent = "♫";
    console.log("Tambahkan file music.mp3 untuk mengaktifkan musik.");
  }
});

musicToggle.addEventListener("click", async function () {
  if (weddingMusic.paused) {
    try {
      await weddingMusic.play();
      musicToggle.classList.add("playing");
      musicToggle.setAttribute("aria-label", "Hentikan musik");
    } catch (error) {
      alert("Musik belum tersedia. Tambahkan file music.mp3 ke folder proyek.");
    }
  } else {
    weddingMusic.pause();
    musicToggle.classList.remove("playing");
    musicToggle.setAttribute("aria-label", "Putar musik");
  }
});

const params = new URLSearchParams(window.location.search);
const guest = params.get("to");
if (guest) {
  document.getElementById("guestName").textContent = guest;
}