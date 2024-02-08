let songIndex = 0;
let audioElement = new Audio("songs/0.mp3");
let masterPlay = document.getElementById("masterPlay");
let songRange = document.getElementById("songRange");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songBox = Array.from(document.getElementsByClassName("songBox"));

let songs = [
  {
    naMe: "lalkara",
    filePath: "songs/0.mp3",
    coverPath: "covers/Diljit covor.jpg",
  },
  {
    naMe: "Try ME",
    filePath: "songs/1.mp3",
    coverPath: "covers/images.jpg",
  },
  {
    naMe: "Whatcha Doin",
    filePath: "songs/2.mp3",
    coverPath: "covers/Diljit covor.jpg",
  },
  {
    naMe: "Flower and Saints",
    filePath: "songs/3.mp3",
    coverPath: "covers/flower and saints.webp",
  },
  {
    naMe: "Bachke Bachke",
    filePath: "songs/4.mp3",
    coverPath: "covers/images.jpg",
  },
  {
    naMe: "Aakh Jehreeli",
    filePath: "songs/5.mp3",
    coverPath: "covers/images (1).jpg",
  },
  {
    naMe: "Softly",
    filePath: "songs/6.mp3",
    coverPath: "covers/images.jpg",
  },
  {
    naMe: "Farmaish",
    filePath: "songs/7.mp3",
    coverPath: "covers/Farmaish.jpg",
  },
  {
    naMe: "Hood Famous",
    filePath: "songs/8.mp3",
    coverPath: "covers/navan.jpg",
  },
  {
    naMe: "Hustling",
    filePath: "songs/9.mp3",
    coverPath: "covers/Vicky.jpg",
  },
  {
    naMe: "Never Fold",
    filePath: "songs/10.mp3",
    coverPath: "covers/Sidhu.jpg",
  },
];

songBox.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].naMe;
});

masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});
// audioElement.play();
  audioElement.addEventListener("timeupdate", () => {
  range = parseInt((audioElement.currentTime/audioElement.duration)*100);
  songRange.value= range;
});
songRange.addEventListener('change',()=>{
  audioElement.currentTime= songRange.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
  Array.from(document.getElementsByClassName('songPlay')).forEach((element)=> {
    element.classList.remove("fa-circle-pause");
    element.classList.add("fa-circle-play");
  })
}

Array.from(document.getElementsByClassName("songPlay")).forEach( (element)=> {
    element.addEventListener("click", (e)=>{
      makeAllPlays();
      // console.log(e.target);
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-circle-play");
      e.target.classList.add("fa-circle-pause");
      audioElement.src = `songs/${songIndex}.mp3`;
      masterSongName.innerText = songs[songIndex].naMe;
      audioElement.currentTime = 0;
      audioElement.play();
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
      gif.style.opacity = 1;
      // if (audioElement.paused || audioElement.currentTime <= 0) {
       
      //   masterPlay.classList.remove("fa-play-circle");
      //   masterPlay.classList.add("fa-pause-circle");
        
      // } else {
      
      //   masterPlay.classList.remove("fa-pause-circle");
      //   masterPlay.classList.add("fa-play-circle");
      
      // }

    })
})

document.getElementById('next').addEventListener('click', ()=>{
  if(songIndex>=9){
    songIndex=0;
  }
  else{
    songIndex += 1;
  }
  audioElement.src = `songs/${songIndex}.mp3`;
  masterSongName.innerText = songs[songIndex].naMe;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
})

document.getElementById('previous').addEventListener('click', ()=>{
  if(songIndex<=0){
    songIndex=0;
  }
  else{
    songIndex -= 1;
  }
  audioElement.src = `songs/${songIndex}.mp3`;
  masterSongName.innerText = songs[songIndex].naMe;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
})