const Volume = document.getElementById('volume')
const volumeInput = document.getElementById('volume-input')

Volume.addEventListener('input', () => {
    thePianoLady.volume = Volume.value / 10
    DanceWithMe.volume = Volume.value / 10
    Chemistry.volume = Volume.value / 10
    volumeInput.value = Volume.value / 10
})

volumeInput.addEventListener('input', () => {
    if (volumeInput.value <= 1 && volumeInput.value >= 0 ) {
        thePianoLady.volume = volumeInput.value
        DanceWithMe.volume = volumeInput.value
        Chemistry.volume = volumeInput.value
        Volume.value = volumeInput.value * 10
    }
})

const playMusic = document.getElementById('play-music')

const thePianoLady = document.getElementById('the-piano-lady')
const thePianoLadySeekBar = document.getElementById('the-piano-lady-seekbar')

const time = document.getElementById('time')

playMusic.addEventListener('click', () => {
    if (playMusic.textContent == '❚❚') {
        playMusic.innerHTML = '&#9658;'
        thePianoLady.pause()
    } else {
        playMusic.innerHTML = '&#10074;&#10074;'   
        thePianoLady.play();
    } 
})
thePianoLady.addEventListener('timeupdate', () => {
    thePianoLadySeekBar.value = thePianoLady.currentTime
    time.innerText = parseInt(thePianoLady.currentTime) + 's'
})

thePianoLadySeekBar.addEventListener('input', () => {
    thePianoLady.currentTime = thePianoLadySeekBar.value
    time.innerText = parseInt(thePianoLady.currentTime) + 's'
})







const playMusic1 = document.getElementById('play-music1')

const DanceWithMe = document.getElementById('dance-with-me')
const DanceWithMeSeekBar = document.getElementById('dance-with-me-seekbar')

const time1 = document.getElementById('time1')

playMusic1.addEventListener('click', () => {
    if (playMusic1.textContent == '❚❚') {
        playMusic1.innerHTML = '&#9658;'
        DanceWithMe.pause()
    } else {
        playMusic1.innerHTML = '&#10074;&#10074;'   
        DanceWithMe.play();
    } 
})
DanceWithMe.addEventListener('timeupdate', () => {
    DanceWithMeSeekBar.value = DanceWithMe.currentTime
    time1.innerText = parseInt(DanceWithMe.currentTime) + 's'
})

DanceWithMeSeekBar.addEventListener('input', () => {
    DanceWithMe.currentTime = DanceWithMeSeekBar.value
    time1.innerText = parseInt(DanceWithMe.currentTime) + 's'
})







const playMusic2 = document.getElementById('play-music2')

const Chemistry = document.getElementById('chemistry')
const ChemistrySeekBar = document.getElementById('chemistry-seekbar')

const time2 = document.getElementById('time2')

playMusic2.addEventListener('click', () => {
    if (playMusic2.textContent == '❚❚') {
        playMusic2.innerHTML = '&#9658;'
        Chemistry.pause()
    } else {
        playMusic2.innerHTML = '&#10074;&#10074;'   
        Chemistry.play();
    } 
})
Chemistry.addEventListener('timeupdate', () => {
    ChemistrySeekBar.value = Chemistry.currentTime
    time2.innerText = parseInt(Chemistry.currentTime) + 's'
})

ChemistrySeekBar.addEventListener('input', () => {
    Chemistry.currentTime = ChemistrySeekBar.value
    time2.innerText = parseInt(Chemistry.currentTime) + 's'
})