console.log("JavaScript connected successfully!");

const audio = document.getElementById("main-audio");
const title = document.getElementById("title");
const cover = document.getElementById("cover");

// List of songs - Make sure these files exist in your 'music' folder!
const songList = [
    {
        name: "LEVELS",
        path: "music/levels.mp3",
        image: "levels.jpeg"
    },
    {
        name: "SONG TWO",
        path: "music/song2.mp3", // Change this to a real filename you have
        image: "cover2.jpg"      // Change this to a real filename you have
    }
];

let songIndex = 0;

function loadSong(song) {
    title.innerText = song.name;
    audio.src = song.path;
    cover.src = song.image;
}

function playSong() {
    console.log("Playing...");
    audio.play().catch(err => console.log("Playback error:", err));
}

function pauseSong() {
    console.log("Paused.");
    audio.pause();
}

function nextSong() {
    songIndex++;

    if (songIndex >= songList.length) {
        songIndex = 0;
    }

    loadSong(songList[songIndex]);
    playSong();
}

// Automatically play next song when one ends
audio.addEventListener('ended', nextSong);
