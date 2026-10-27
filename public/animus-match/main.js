$(document).ready(initializeApp);

var first_card_clicked = null;
var second_card_clicked = null;
var total_possible_matches = 9;
var match_counter = 0;
var can_click_card = true;
var images = [
  "altair.jpg",
  "arno.jpg",
  "bayek.jpg",
  "connor.jpg",
  "edward.jpg",
  "evie.jpg",
  "ezio.jpg",
  "kassandra.jpg",
  "jacob.jpg"
];
var attempts = 0;
var accuracy = 0;
var gamesPlayed = 0;
let soundIsOn = true;

function initializeApp() {
  randomizeAndGenerateCards();
  $(".card").click(cardClicked);
  $(".resetButton").click(resetGame);
  themeSong();
  winModal();
}

function themeSong() {
  // Added for hosting: the song used to autoplay on load, which browsers block,
  // and the rejection went unhandled. It now loads on first enable instead.
  var player = null;
  var pauseButton = document.getElementById("pause");
  var iconOn = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4zm12.5 3a4.5 4.5 0 0 0-2-3.74v7.48A4.5 4.5 0 0 0 16.5 12zm-2-7.6v2.06a7 7 0 0 1 0 11.08v2.06a9 9 0 0 0 0-15.2z"/></svg>';
  var iconOff = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4zm14.6 3 2.4 2.4-1.4 1.4-2.4-2.4-2.4 2.4-1.4-1.4 2.4-2.4-2.4-2.4 1.4-1.4 2.4 2.4 2.4-2.4 1.4 1.4L18.6 12z"/></svg>';

  function paint(on) {
    if (!pauseButton) return;
    pauseButton.innerHTML = on ? iconOn : iconOff;
    pauseButton.setAttribute("aria-pressed", on ? "true" : "false");
  }

  function ensurePlayer() {
    if (!player) {
      player = new Audio("audio/theme-song.mp3");
      player.loop = true;
      player.volume = 0.6;
      player.preload = "none";
    }
    return player;
  }

  paint(false);
  // Nothing plays until the visitor asks for it, so the state has to agree.
  soundIsOn = false;

  if (!pauseButton) return;

  pauseButton.onclick = function () {
    if (soundIsOn === true) {
      if (player) player.pause();
      soundIsOn = false;
      paint(false);
      return;
    }

    soundIsOn = true;
    paint(true);
    var attempt = ensurePlayer().play();
    if (attempt && typeof attempt.catch === "function") {
      attempt.catch(function () {
        soundIsOn = false;
        paint(false);
      });
    }
  };
}

function pickSound() {
  if (soundIsOn === true) {
    var player = new Audio("audio/hidden-blade.mp3");
    player.play();
  }
}
function wrongSound() {
  if (soundIsOn === true) {
    var player = new Audio("audio/ac-dmg.mp3");
    player.play();
  }
}
function matchSound() {
  if (soundIsOn === true) {
    var player = new Audio("audio/respawn.mp3");
    player.play();
  }
}
function resetSound() {
  if (soundIsOn === true) {
    var player = new Audio("audio/eagle.mp3");
    player.play();
  }
}
function winSound() {
  if (soundIsOn === true) {
    var player = new Audio("audio/eagle.mp3");
    player.play();
  }
}

function shuffle(array) {
  var currentIndex = array.length;
  var temporaryValue;
  var randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function randomizeAndGenerateCards() {
  var doubleImages = images.concat(images);
  shuffle(doubleImages);
  for (var i = 0; i < doubleImages.length; i++) {
    var container = $("<div>").addClass("cardContainer");
    var card = $("<div>").addClass("card");
    var front = $("<img>")
        .addClass("front")
        .attr("src", "images/" + doubleImages[i]);
    var back = $('<img src="images/back.jpg">')
        .addClass("back vibrate");
    card.append(back, front);
    container.append(card);
    $(".gameArea").append(container);
  }
}

function cardClicked() {
  if (can_click_card === false || $(this).parent().hasClass("click")) {
    return;
  }
  if (first_card_clicked === null) {
    first_card_clicked = $(this);
    first_card_clicked.parent().addClass("click");
    pickSound();
    return;
  } else {
    second_card_clicked = $(this);
    second_card_clicked.parent().addClass("click");
    can_click_card = false;
    pickSound();
    var first_card_src = first_card_clicked.find(".front").attr("src");
    var second_card_src = second_card_clicked.find(".front").attr("src");
    if (first_card_src === second_card_src) {
      can_click_card = false;
      match_counter++;
      attempts++;
      accuracy = match_counter / attempts;
      displayStats();
      matchSound();
      can_click_card = true;
      if (match_counter === total_possible_matches) {
        setTimeout(openModal, 2000)
      }
      first_card_clicked = null;
      second_card_clicked = null;
      return;
    } else {
      can_click_card = false;
      attempts++;
      accuracy = match_counter / attempts;
      displayStats();
      setTimeout(hideBothCards, 1000);
    }
  }
}

function hideBothCards() {
  wrongSound();
  first_card_clicked.parent().removeClass("click");
  second_card_clicked.parent().removeClass("click");
  first_card_clicked = null;
  second_card_clicked = null;
  can_click_card = true;
}

function displayStats() {
  $("#gamesPlayed").text(gamesPlayed);
  $("#attempts").text(attempts);
  $("#accuracy").text((accuracy*100).toFixed(2) + "%");
}

function resetStats() {
  match_counter = 0;
  attempts = 0;
  accuracy = 0;
  displayStats();
}

function resetGame() {
  if(attempts >= 1){
    gamesPlayed++;
    resetStats();
    $(".gameArea").empty();
    shuffle(images);
    randomizeAndGenerateCards();
    $(".card").click(cardClicked);
    can_click_card = true;
  }
}

function winModal() {
  var modal = document.getElementById("myModal");
  var picture = modal.querySelector(".modal-picture");
  openModal = function () {
    winSound();
    // Added for hosting: the win animation is ~1.2MB, so it is fetched only
    // when someone actually wins instead of on page load.
    if (picture && !picture.getAttribute("src") && picture.dataset.src) {
      picture.src = picture.dataset.src;
    }
    modal.style.display = "block";
  };
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

