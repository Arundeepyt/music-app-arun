const audio = document.getElementById("main-audio");
const title = document.getElementById("title");
const cover = document.getElementById("cover");
const progressBar = document.getElementById("progress-bar");

const songs = [
    { 
        name: "LEVELS", 
        path: "music/Levels.mp3", 
        img: "levels.jpeg" 
    }
];

let index = 0;

// Update the progress line
audio.addEventListener('timeupdate', () => {
    if (audio.duration) {
        const percent = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = percent + "%";
    }
});

function playSong() {
    audio.play();
}

function pauseSong() {
    audio.pause();
}

function nextSong() {
    index = (index + 1) % songs.length;
    title.innerText = songs[index].name;
    cover.src = songs[index].img;
    audio.src = songs[index].path;
    audio.play();
}
