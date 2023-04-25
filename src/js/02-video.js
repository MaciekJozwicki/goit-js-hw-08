import Player from '@vimeo/player'

const VideoEl = document.getElementById('vimeo-player')
const player = new Player(VideoEl)


// const dataTime = player.on('timeupdate', function(data) {
//         console.log(data.seconds);
// });

player.on('timeupdate', (data) => {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(data.seconds))
})
    
player.setCurrentTime(localStorage.getItem("videoplayer-current-time"))