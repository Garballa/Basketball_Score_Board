let homeScoreNum = document.getElementById("home-score");
let homeScore = 0;
let guestScoreNum = document.getElementById("guest-score");
let guestScore = 0;

function addHomeOne() {
  homeScore += 1;
  homeScoreNum.innerText = homeScore;
}
function addGuestOne() {
  guestScore += 1;
  guestScoreNum.innerText = guestScore;
}
function addHomeTwo() {
  homeScore += 2;
  homeScoreNum.innerText = homeScore;
}
function addGuestTwo() {
  guestScore += 2;
  guestScoreNum.innerText = guestScore;
}

function addHomeThree() {
  homeScore += 3;
  homeScoreNum.innerText = homeScore;
}
function addGuestThree() {
  guestScore += 3;
  guestScoreNum.innerText = guestScore;
}

function reset() {
  homeScoreNum.innerText = 0;
  guestScoreNum.innerText = 0;
}
