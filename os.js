/* NAVIGATION VAR */
var skipForward = document.querySelector('#forward'),
skipBack = document.querySelector('#back'),
play = document.querySelector('#play'),
menu = document.querySelector('#menu'),
button = document.querySelector('.center-button'),
homeOptions = document.querySelectorAll('.home .option'),
homeCursorWide = document.querySelectorAll('.home .option').length,
homeCursor = 0,
playlistsOptions = document.querySelectorAll('.playlists .option'),
playlistsCursorWide = document.querySelectorAll('.playlists .option').length,
playlistsCursor = 0;

/* CONTENT VAR */
var titleBar = document.querySelector('.title-bar'),
home = document.querySelector('.home'),
about = document.querySelector('.about'),
curriculum = document.querySelector('.curriculum'),
work = document.querySelector('.work'),
playlists = document.querySelector('.playlists'),
contact = document.querySelector('.contact'),
currentDisplay;

skipForward.addEventListener("click", function() {
  if (playlists.style.display == "flex"){
    if (playlistsCursor < playlistsCursorWide - 1) {playlistsCursor += 1} else {playlistsCursor = 0}
    document.querySelector('.playlists .selected').classList.toggle('selected');
    playlistsOptions[playlistsCursor].classList.add('selected');
  }

  if (home.style.display == "flex"){
    if (homeCursor < homeCursorWide - 1) {homeCursor += 1} else {homeCursor = 0}
    document.querySelector('.home .selected').classList.toggle('selected');
    homeOptions[homeCursor].classList.add('selected');
  }
});

skipBack.addEventListener("click", function() {
  if (playlists.style.display == "flex"){
    if (playlistsCursor > 0) {playlistsCursor -= 1} else {playlistsCursor = playlistsCursorWide - 1}
    document.querySelector('.playlists .selected').classList.toggle('selected');
    playlistsOptions[playlistsCursor].classList.add('selected');
  }

  if (home.style.display == "flex"){
    if (homeCursor > 0){homeCursor -= 1} else {homeCursor = homeCursorWide - 1}
    document.querySelector('.home .selected').classList.toggle('selected');
    homeOptions[homeCursor].classList.add('selected');
  }
});

menu.addEventListener("click", function() {
  if (currentDisplay != null){
    hide(currentDisplay);
    display(home);
    homeOptions[homeCursor].classList.add('selected');
  }
});

play.addEventListener("click", function() {
});

button.addEventListener("click", function() {
  if (playlists.style.display == "flex"){
    let playlistsSelectedContent = document.querySelector('.playlists .selected');
    if (playlistsSelectedContent.textContent == "Hip Hop Samples"){
      alert("playlist " + playlistsSelectedContent.textContent + " link")
    } else if (playlistsSelectedContent.textContent == "Summer Mojito"){
      alert("playlist " + playlistsSelectedContent.textContent + " link")
    } else if (playlistsSelectedContent.textContent == "Rap Sofa Fusion"){
      alert("playlist " + playlistsSelectedContent.textContent + " link")
    }
  }


  if (home.style.display == "flex"){
    let homeSelectedContent = document.querySelector('.home .selected');
    if (homeSelectedContent.textContent == "About"){
      hide(home);
      display(about);
      currentDisplay = about;
      homeSelectedContent.classList.toggle('selected');
    } else if (homeSelectedContent.textContent == "Curriculum"){
      hide(home);
      display(curriculum);
      currentDisplay = curriculum;
      homeSelectedContent.classList.toggle('selected');
    } else if (homeSelectedContent.textContent == "Work"){
      hide(home);
      display(work);
      currentDisplay = work;
      homeSelectedContent.classList.toggle('selected');
    } else if (homeSelectedContent.textContent == "Playlists"){
      hide(home);
      display(playlists);
      currentDisplay = playlists;
      homeSelectedContent.classList.toggle('selected');
    } else if (homeSelectedContent.textContent == "Contact"){
      hide(home);
      display(contact);
      currentDisplay = contact;
      homeSelectedContent.classList.toggle('selected');
    }
  }
});

function display(element){
  element.style.display = "flex";
}
function hide(element){
  element.style.display = "none";
}
setTimeout(function(){
  hide(document.querySelector('img'))
}, 4000)
setTimeout(function(){
  display(titleBar);
  display(home);
}, 4100)