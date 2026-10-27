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
var hideCardsTimer = null;
var winModalTimer = null;
// One Audio per sound, reused. Allocating a new element on every click made
// each cue cut the previous one off and left the old elements playing.
var audioCache = {};

function initializeApp() {
  randomizeAndGenerateCards();
  // Delegated so the cards never have to be re-bound after a reset.
  $(".gameArea").on("click", ".card", cardClicked);
  $("#reset").click(resetGame);
  displayStats();
  themeSong();
  winModal();
}

function playSound(name) {
  if (soundIsOn !== true) {
    return;
  }
  var player = audioCache[name];
  if (!player) {
    player = new Audio("audio/" + name);
    audioCache[name] = player;
  }
  try {
    player.currentTime = 0;
  } catch (e) {
    // Not seekable until the first frame is buffered; just play from the start.
  }
  var attempt = player.play();
  if (attempt && typeof attempt.catch === "function") {
    attempt.catch(function () {});
  }
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
  playSound("hidden-blade.mp3");
}
function wrongSound() {
  playSound("ac-dmg.mp3");
}
function matchSound() {
  playSound("respawn.mp3");
}
function resetSound() {
  playSound("eagle.mp3");
}
function winSound() {
  playSound("eagle.mp3");
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
    // Dragging a card produced a ghost image and swallowed the click.
    front.attr("draggable", "false");
    back.attr("draggable", "false");
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
      match_counter++;
      attempts++;
      accuracy = match_counter / attempts;
      displayStats();
      matchSound();
      can_click_card = true;
      first_card_clicked = null;
      second_card_clicked = null;
      if (match_counter === total_possible_matches) {
        // A cleared board is a finished game, same as resetting one.
        gamesPlayed++;
        displayStats();
        winModalTimer = setTimeout(openModal, 2000);
      }
      return;
    } else {
      attempts++;
      accuracy = match_counter / attempts;
      displayStats();
      hideCardsTimer = setTimeout(hideBothCards, 1000);
    }
  }
}

function hideBothCards() {
  hideCardsTimer = null;
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
  // Anything still pending belongs to the board being replaced, so cancel it
  // first: a live hideBothCards flipped cards on the new board, and a live
  // openModal popped the win screen over a game that had just restarted.
  clearTimeout(hideCardsTimer);
  clearTimeout(winModalTimer);
  hideCardsTimer = null;
  winModalTimer = null;
  first_card_clicked = null;
  second_card_clicked = null;
  can_click_card = true;

  // A game counts as played once it has started and has not already been won.
  if (attempts >= 1 && match_counter < total_possible_matches) {
    gamesPlayed++;
  }
  resetStats();
  $(".gameArea").empty();
  shuffle(images);
  randomizeAndGenerateCards();
  resetSound();
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
    modal.style.display = "flex";
  };
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

