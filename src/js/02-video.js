
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);


player.on('timeupdate', throttle(function(data) {
    const currentTime = data.seconds;
    localStorage.setItem('videoplayer-current-time', currentTime);
}, 1000)); 

window.addEventListener('load', function() {
   
    const savedTime = localStorage.getItem('videoplayer-current-time');
    if (savedTime !== null) {
        player.setCurrentTime(parseFloat(savedTime));
    }
});


