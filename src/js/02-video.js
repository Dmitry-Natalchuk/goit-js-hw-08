import Player from "@vimeo/player";
import throttle from "lodash.throttle";
//const throttle = require("lodash.throttle")
//const Vimeo = require("@vimeo/player")

const saveTime = "videoplayer-current-time";
//console.log(saveTime)
const videoPlayer = localStorage.getItem(saveTime);    
//console.log(videoPlayerCurrentTime)
const iframe = document.querySelector("iframe");
//console.log(iframe)

const player = new Player(iframe); 

if (videoPlayer) {
    player.setCurrentTime(videoPlayer);
};
//timeupdate = event.time
player.on("timeupdate", throttle(onTime, 1000))

function onTime(event) { 
    const time = event.seconds;
    localStorage.setItem(saveTime, time);
};




//Приклад
/* import Player from '@vimeo/player';

const player = new Player('handstick', {
    id: 19231868,
    width: 640
});

player.on('play', function() {
    console.log('played the video!');
}); */
//===============================