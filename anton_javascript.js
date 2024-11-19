const videoElement = document.getElementById("videoJumpscare");

if (videoElement) {
    // Tampilkan video, pastikan suara aktif, dan mulai pemutaran
    videoElement.style.display = "block";
    videoElement.muted = false; // Pastikan suara tidak mute
    videoElement.loop = true; // Loop otomatis
    videoElement.play().catch((error) => {
        console.error("Gagal memutar video:", error.message);
    });

    // Sembunyikan scrollbar dan kunci layar
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    // Fungsi untuk memblokir semua interaksi pengguna
    function disableInteraction(event) {
        event.preventDefault();
        event.stopPropagation();
    }

    // Tambahkan listener untuk memblokir semua input
    const eventsToBlock = [
        "keydown",
        "keyup",
        "mousedown",
        "mouseup",
        "contextmenu",
        "click",
        "dblclick",
        "wheel",
        "touchstart",
        "touchmove",
        "touchend",
    ];

    eventsToBlock.forEach((eventName) => {
        window.addEventListener(eventName, disableInteraction, true);
    });

    // Pastikan video kembali ke awal jika selesai (jika loop gagal)
    videoElement.addEventListener("ended", () => {
        videoElement.currentTime = 0;
        videoElement.play();
    });

    // Tambahkan overlay untuk memblokir klik pada seluruh layar
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100vw";
    overlay.style.height = "100vh";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.8)"; // Opsional: efek gelap
    overlay.style.zIndex = "9999";
    overlay.style.cursor = "not-allowed"; // Tampilkan kursor "diblokir"
    document.body.appendChild(overlay);

    console.log("Video berhasil dimulai dan layar terkunci.");
} else {
    console.error("Elemen videoJumpscare tidak ditemukan.");
}
