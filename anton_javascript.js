const videoElement = document.getElementById("videoJumpscare");

if (videoElement) {
    // Aktifkan autoplay dan pastikan tidak mute
    videoElement.autoplay = true;
    videoElement.muted = false; // Pastikan audio aktif
    videoElement.loop = true;
    videoElement.preload = "auto"; // Preload video

    // Tampilkan video langsung
    videoElement.style.display = "block";
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    // Mulai video segera setelah bisa diputar
    videoElement.load(); // Muat ulang video untuk sinkronisasi
    videoElement.addEventListener("canplaythrough", () => {
        videoElement.play().catch((error) => {
            console.error("Gagal memutar video:", error.message);
        });
    });

    // Blokir interaksi pengguna
    const disableInteraction = (event) => {
        event.preventDefault();
        event.stopPropagation();
    };

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

    // Tambahkan overlay untuk memblokir semua interaksi
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100vw";
    overlay.style.height = "100vh";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    overlay.style.zIndex = "9999";
    overlay.style.cursor = "not-allowed";
    document.body.appendChild(overlay);

    console.log("Video berhasil dimuat dan langsung muncul.");
} else {
    console.error("Elemen videoJumpscare tidak ditemukan.");
}
