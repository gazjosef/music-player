const musicContainer = document.getElementById('music_container');

const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');

// Song Titles
const songs = ['hey', 'summer', 'ukulele'];

// Keep Track Of Songs
let songIndex = 2;

// Initially Load Song Details Into DOM
loadSong(songs(songIndex));

// Update Song Details
function loadSong(song) {
  title.innerText = song;
}
