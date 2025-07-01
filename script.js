const music = document.getElementById("music");
const frogh = document.getElementsByClassName("singing-frog")[0];
let isPlaying = false;

function toggleMusic() {
    if (isPlaying) {
        music.pause();
        music.currentTime = 0;
        frogh.classList.remove("sing");
        frogh.classList.add("sleep");
    } else {
        music.play();
        frogh.classList.remove("sleep");
        frogh.classList.add("sing");
    }
    isPlaying = !isPlaying;
}

function toggleTheme() {
    const isDark = document.body.classList.toggle('dark');
    document.getElementsByClassName('singing-frog')[0].classList.toggle('night');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    document.getElementsByClassName('singing-frog')[0].classList.add('night');
  } else {
    document.body.classList.remove('dark');
    document.getElementsByClassName('singing-frog')[0].classList.remove('night');
  }
});