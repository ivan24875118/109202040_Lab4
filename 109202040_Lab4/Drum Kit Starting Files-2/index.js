// 選取所有鼓按鈕
const drumButtons = document.querySelectorAll(".drum");

// 為每個按鈕添加點擊事件
drumButtons.forEach(button => {
  button.addEventListener("click", function () {
    const buttonInnerHTML = this.innerHTML;
    playSound(buttonInnerHTML);
    addAnimation(buttonInnerHTML);
  });
});

// 為整個網頁添加鍵盤按下事件
document.addEventListener("keydown", function (event) {
  playSound(event.key);
  addAnimation(event.key);
});

// 播放對應的聲音
function playSound(key) {
  switch (key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    default:
      console.log("Unmapped key: " + key);
  }
}

// 添加按鈕動畫效果
function addAnimation(key) {
  const activeButton = document.querySelector(`.${key}`);
  if (activeButton) {
    activeButton.classList.add("pressed");
    setTimeout(() => {
      activeButton.classList.remove("pressed");
    }, 100);
  }
}
