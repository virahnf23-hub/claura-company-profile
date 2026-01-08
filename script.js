const greeting = document.getElementById("greeting");
const hour = new Date().getHours();

if (hour >= 5 && hour < 12) greeting.innerText = "Selamat Pagi 🌤️";
else if (hour >= 12 && hour < 15) greeting.innerText = "Selamat Siang ☀️";
else if (hour >= 15 && hour < 18) greeting.innerText = "Selamat Sore 🌅";
else greeting.innerText = "Selamat Malam 🌙";
