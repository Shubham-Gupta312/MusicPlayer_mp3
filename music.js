const music = document.querySelector('audio');
const img = document.querySelector('img');
const play = document.getElementById('play');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let progress = document.getElementById('progress');
let total_duration = document.getElementById('duration');
let current_time = document.getElementById('current_time');
const progress_div = document.getElementById('progress_div');


const PlayList = [
    {
        name: "Shub2",
        title: "Vaste",
        artist: "Dhavi Bhanushali"
    },
    {
        name: "Shub4",
        title: "Namo Namo",
        artist: "sara ali khan"
    },
    {
        name: "Shub32",
        title: "Yaad Teri",
        artist: "Rahul Vaidya"
    },
    {
        name: "Shub8",
        title: "Tu Ban Ja gali",
        artist: "Asees Kaur"
    },

    {
        name: "Shub5",
        title: "Lagi Lagan",
        artist: "Hansraj Raghuwanshi"
    },
    {
        name: "Shub9",
        title: "Kinna Sona",
        artist: "Jubin Nutiyal"
    },
    {
        name: "Shub31",
        title: "College Miss Kardi",
        artist: "Rashi Sood"
    },

    {
        name: "Shub7",
        title: "Wafa Na Raas Aayi",
        artist: "Jubin Nutiyal"
    },
    {
        name: "Shub34",
        title: "Tum Jaise Doston",
        artist: "Rajeev Raja"
    },
    {
        name: "Shub10",
        title: "Radhe Radhe",
        artist: "Hansraj Raghuwanshi"
    },

    {
        name: "Shub6",
        title: "Bedardi",
        artist: "Jubin Nutiyal"
    },
    {
        name: "Shub1",
        title: "Baby",
        artist: "Justin Bieber"
    },
    {
        name: "Shub11",
        title: "Inam",
        artist: "Masoom Sharma"
    },
    {
        name: "Shub12",
        title: "KFG Theme",
        artist: "Ravi Basrur"
    },
    {
        name: "Shub13",
        title: "Rusya na kar",
        artist: "Tahir Abbas"
    },
    {
        name: "Shub14",
        title: "Yaar Bewde",
        artist: "Rahul Kadyan"
    },
    {
        name: "Shub15",
        title: "Love me like you",
        artist: "Ellie Goulding"
    },
    {
        name: "Shub16",
        title: "Kabira",
        artist: "Jubin Nutiyal"
    },
    {
        name: "Shub17",
        title: "Woh Din",
        artist: "Tushar Joshi"
    },
    {
        name: "Shub18",
        title: "Alone",
        artist: "Alan Walker"
    },
    {
        name: "Shub19",
        title: "On My Way",
        artist: "Alan Walker"
    },
    {
        name: "Shub20",
        title: "Ganga Kinare",
        artist: "Hansraj Raghuwanshi"
    },
    {
        name: "Shub21",
        title: "Love Story",
        artist: "Taylor Swift"
    },
    {
        name: "Shub22",
        title: "I am Comming",
        artist: "Skylar Gray"
    },
    {
        name: "Shub23",
        title: "Joker",
        artist: "Hardy Sandhu"
    },
    {
        name: "Shub24",
        title: "Bhabhi",
        artist: "Mankirt Aulakh"
    },
    {
        name: "Shub25",
        title: "8 Raflaan",
        artist: "Mankirt Aulakh"
    },
    {
        name: "Shub26",
        title: "Vail",
        artist: "Mankirt Aulakh"
    },
    {
        name: "Shub27",
        title: "Let Me Love You",
        artist: "DJ Snake | Justin Bieber"
    },
    {
        name: "Shub28",
        title: "Mast Najro se",
        artist: "Lakhwinder Wadali"
    },
    {
        name: "Shub29",
        title: "Main Sharabi",
        artist: "Rajeev Raja"
    },
    {
        name: "Shub30",
        title: "Ishq Ka Raja",
        artist: "Addy Nagar"
    },
    {
        name: "Shub33",
        title: "Khairiyat",
        artist: "Arjit Singh"
    },
    {
        name: "Shub35",
        title: "Believer",
        artist: "Imagine Dragons"
    },
    {
        name: "Shub36",
        title: "Bheti Hawa sa",
        artist: "Shaan | Shantanu Moitra"
    },
];

let isPlay = false;

const playMusic = () => {
    isPlay = true;
    music.play();
    play.classList.replace('fa-play', 'fa-pause');
   
};

const pauseMusic = () => {
    isPlay = false;
    music.pause();
    play.classList.replace('fa-pause', 'fa-play');
};


play.addEventListener('click', () => {
   
    // Terminatory Operator
    isPlay ? pauseMusic() : playMusic();
});

// Change the Music

const loadSong = (PlayList) => {
    title.textContent = PlayList.title;
    artist.textContent = PlayList.artist;
    music.src = "music/" + PlayList.name + ".mp3";
    img.src = "Images/" + PlayList.name + ".webp";
}
// loadSong(PlayList[1]);

songIndex = 0;
const nextSong = () => {
    songIndex = (songIndex + 1) % PlayList.length;
    loadSong(PlayList[songIndex]);
    playMusic();

};


const prevSong = () => {
    songIndex = (songIndex - 1 + PlayList.length) % PlayList.length;
    loadSong(PlayList[songIndex]);
    playMusic();

};

// *************   PROGRESS BAR WORKING ***************

music.addEventListener('timeupdate', (event) => {

    const { currentTime, duration } = event.srcElement;

    let progress_time = (currentTime / duration) * 100;

    progress.style.width = `${progress_time}%`;

    // //  **********************  Music Duration Update


    let min_duration = Math.floor(duration / 60);
    let sec_duration = Math.floor(duration % 60);

    let tot_duration = `${min_duration}:${sec_duration}`;
    if (duration) {
        total_duration.textContent = `${tot_duration}`;
    }

    // //  **********************  Current  Duration Update


    let min_currentTime = Math.floor(currentTime / 60);
    let sec_currentTime = Math.floor(currentTime % 60);


    if (sec_currentTime < 10) {
        sec_currentTime = `0${sec_currentTime}`;
    }
    let tot_currentTime = `${min_currentTime}:${sec_currentTime}`;
    current_time.textContent = `${tot_currentTime}`;
   
});

//      **************   PROGRESS ON CLICK FUNCTIONALITY ***************

progress_div.addEventListener('click', (event) => {
    
    const { duration } = music;
    
    let move_progress = (event.offsetX / event.srcElement.clientWidth) * duration;

    music.currentTime = move_progress;
});

// IF MUSIC END THEN IT CALL THENEXT SONG
music.addEventListener('ended', nextSong);

next.addEventListener('click', nextSong);
prev.addEventListener('click', prevSong);


