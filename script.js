document.getElementById("all-pages").addEventListener("change", function () {
  const allPagesText = document.querySelector(".all-pages-text");
  if (this.checked) {
    allPagesText.style.opacity = "1";
    allPagesText.style.backgroundColor = "#1F2128";
    allPagesText.style.color = "#fff"; // Adjust text color for better contrast
  } else {
    allPagesText.style.opacity = "0";
    allPagesText.style.backgroundColor = "transparent";
    allPagesText.style.color = "#1F2128"; // Reset text color
  }
});
