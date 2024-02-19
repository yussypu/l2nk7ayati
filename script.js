const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

let yesClicked = false;

yesBtn.addEventListener("click", () => {
  if (!yesClicked) {
    // Update the response for the first "Yes" button click
    question.innerHTML = "Yayyyy want to get a ring next year in Jordan Riyadh Strasbourg or Switzerland next year 7obbi?";
    gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
    yesClicked = true;
  } else {
    // Redirect to celebrate.html after the second "Yes" button click
    window.location.href = "celebrate.html";
  }
});

noBtn.addEventListener("click", () => {
  if (yesClicked) {
    // Redirect to sad.html after clicking "No" on the second page
    window.location.href = "sad.html";
  } else {
    // Implement your existing "No" button functionality for the first page here
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
  }
});
