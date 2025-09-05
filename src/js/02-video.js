import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const CURRENT_TIME_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe, {
    loop: true,
    fullscreen: true,
    quality: '1080p',
});

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    player.setCurrentTime(0);
    localStorage.removeItem(CURRENT_TIME_KEY);
    player.play();
});

const currentTime = (time) => {
    localStorage.setItem(CURRENT_TIME_KEY, time.seconds);
};

player.on('timeupdate', throttle(currentTime, 1000));

player.setCurrentTime(JSON.parse(localStorage.getItem(CURRENT_TIME_KEY)) || 0);

