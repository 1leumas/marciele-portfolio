function openTab(event, tabName) {
  let tabContents = document.getElementsByClassName("tab-content");
  for (let i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = "none";
    tabContents[i].classList.remove("active");
  }

  let tabButtons = document.getElementsByClassName("tab-button");
  for (let i = 0; i < tabButtons.length; i++) {
    tabButtons[i].classList.remove("active");
  }

  document.getElementById(tabName).style.display = "block";
  document.getElementById(tabName).classList.add("active");
  event.currentTarget.classList.add("active");
}

function openImg(event, imgSrc) {
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("expanded-img");

  modal.style.display = "flex"; // <-- change to flex
  modalImg.src = imgSrc;
}

function closeImg() {
  const modal = document.getElementById("image-modal");
  modal.style.display = "none";
}