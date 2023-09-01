var num, cscore1, cscore2;
var player = 1;

changebackgroundColor();

function win(num) {
  document.querySelector(".textdisplay").innerHTML = `Player${num} wins`;
  document.querySelector(".textdisplay").style.display = "block";
}

function changebackgroundColor() {
  if (player === 1) {
    document.querySelector("#player1").style.backgroundColor =
      "rgb(147, 243, 243)";
    document.querySelector("#player2").style.backgroundColor = "cyan";
  } else {
    document.querySelector("#player2").style.backgroundColor =
      "rgb(147, 243, 243)";
    document.querySelector("#player1").style.backgroundColor = "cyan";
  }
}

function hold() {
  if (player === 1) {
    player = 2;
    changebackgroundColor();
    if (Number(document.querySelector("#s1").innerHTML) < 100) {
      document.querySelector("#s1").innerHTML =
        Number(document.querySelector("#c1").innerHTML) +
        Number(document.querySelector("#s1").innerHTML);
      document.querySelector("#c1").innerHTML = 0;
    } else {
      win(1);
    }
  } else {
    player = 1;
    changebackgroundColor();
    if (Number(document.querySelector("#s2").innerHTML) < 100) {
      document.querySelector("#s2").innerHTML =
        Number(document.querySelector("#c2").innerHTML) +
        Number(document.querySelector("#s2").innerHTML);
      document.querySelector("#c2").innerHTML = 0;
    } else {
      win(2);
    }
  }
}
function rolldice() {
  num = Number(Math.floor(Math.random() * 6 + 1));
  if (num === 1) {
    hold();
  }
  document.querySelector("img").src = `diceimages/dice${num}.png`;
  document.querySelector(".image").style.display = "block";
  if (player === 1) {
    cscore1 = Number(document.querySelector("#c1").innerHTML);
    cscore1 = cscore1 + num;
    document.querySelector("#c1").innerHTML = cscore1;
  } else {
    cscore2 = Number(document.querySelector("#c2").innerHTML);
    cscore2 = cscore2 + num;
    document.querySelector("#c2").innerHTML = cscore2;
  }
}
