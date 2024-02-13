document.addEventListener('DOMContentLoaded', function () {
  let divAppending = document.createDocumentFragment();

  for (let i = 0; i < 9; i++) {
    const nameDrum = ["Boom [A]", "Clap [S]", "Hi-hat [D]", "Kick [F]", "Openhat [G]", "Ride [H]", "Snare [J]", "Tink [K]", "Tom [L]"];
    const urlSound = ["../DrumKit/sounds/boom.wav", "../DrumKit/sounds/clap.wav",
      "../DrumKit/sounds/hihat.wav", "../DrumKit/sounds/kick.wav",
      "../DrumKit/sounds/openhat.wav", "../DrumKit/sounds/ride.wav",
      "../DrumKit/sounds/snare.wav", "../DrumKit/sounds/tink.wav",
      "../DrumKit/sounds/tom.wav"];

    let newButton = document.createElement('button');
    let newAudio = document.createElement('audio');
    let newTextInsideDiv = document.createElement('p');

    newButton.id = 'div' + i;
    newButton.className = 'drumkBox';
    newTextInsideDiv.className = "paragraphClass";

    newAudio.id = 'audio' + i;
    newAudio.src = urlSound[i];

    let text = document.createTextNode(nameDrum[i]);
    divAppending.appendChild(newButton);
    newButton.appendChild(newAudio);
    newButton.appendChild(text);
  }
  document.body.appendChild(divAppending);

  for (let i = 0; i < 9; i++) {
    window['play' + i] = function () {
      let audio = document.getElementById('audio' + i);
      audio.play();
    }
  }

  for (let i = 0; i < 9; i++) {
    let button = document.getElementById('div' + i);
    button.addEventListener('click', window['play' + i]);
  }

  document.addEventListener("keydown", function (e) {
    switch (e.key) {
      case 'a':
        document.getElementById("audio0").play();
        break;
      case 's':
        document.getElementById("audio1").play();
        break;
      case 'd':
        document.getElementById("audio2").play();
        break;
      case 'f':
        document.getElementById("audio3").play();
        break;
      case 'g':
        document.getElementById("audio4").play();
        break;
      case 'h':
        document.getElementById("audio5").play();
        break;
      case 'j':
        document.getElementById("audio6").play();
        break;
      case 'k':
        document.getElementById("audio7").play();
        break;
      case 'l':
        document.getElementById("audio8").play();
        break;
    }
  });

});
