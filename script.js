function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("hearts");
  heart.innerHTML = "💜";
  heart.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 500);
