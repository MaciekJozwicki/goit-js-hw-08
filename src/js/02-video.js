import Player from '@vimeo/player'
import throttle from 'lodash.throttle'

const VideoEl = document.getElementById('vimeo-player')
const player = new Player(VideoEl)


// const dataTime = player.on('timeupdate', function(data) {
//         console.log(data.seconds);
// });

// player.on('timeupdate', throttle(data => {
//     localStorage.setItem("videoplayer-current-time", JSON.stringify(data.seconds)), 1000
// }))
  
player.on('timeupdate', throttle(data => {
    localStorage.setItem('videoplayer-current-time', data.seconds);
  }, 1000)
);



player.setCurrentTime(localStorage.getItem("videoplayer-current-time"))