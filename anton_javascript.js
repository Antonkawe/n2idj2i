const videoElement = document.getElementById("videoJumpscare");

if (videoElement) {
    // Tampilkan video
    videoElement.style.display = "block";

    // Pastikan video tidak mute dan suara aktif
    videoElement.muted = false;
    videoElement.loop = true;

    // Gunakan play() untuk memastikan video dan audio dimulai bersamaan
    videoElement.load(); // Muat ulang video untuk sinkronisasi
    videoElement.addEventListener("canplay", () => {
        videoElement.play().catch((error) => {
            console.error("Gagal memutar video:", error.message);
        });
    });

    // Blokir scroll dan interaksi
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

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

    // Tambahkan overlay untuk memblokir interaksi pengguna
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

    console.log("Video berhasil dimulai dengan sinkronisasi.");
} else {
    console.error("Elemen videoJumpscare tidak ditemukan.");
}
