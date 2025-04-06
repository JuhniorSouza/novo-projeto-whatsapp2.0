document.getElementById("whatsappBtn").addEventListener("click", function () {
  const audio = document.getElementById("audio");
  audio.play();
  setTimeout(() => {
    window.open("https://wa.me/5511999999999", "_blank"); // coloque seu número aqui
  }, 500);
});
