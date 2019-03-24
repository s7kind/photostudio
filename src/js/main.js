'use strict';


/*
*
* Variables
*
*/
/*videoBox*/
const videoBox = document.querySelector('.video-box');
/*animation*/
const animationLoad = document.querySelectorAll('.animation');
/*img scroll*/
const services = document.querySelector('.services');
/*category*/
const category = document.querySelector('.category');
/*gallery*/
const gallery = document.querySelector('.gallery');

/*gallery*/
if (gallery !== null) {
    require('./modules/functions/gallery')(gallery);
}

/*category*/
if (category !== null) {
    require('./modules/functions/category')(category);
}

/*img scroll*/
if (services !== null) {
    require('./modules/functions/imgScroll')(services);
    require('./modules/functions/services')(services);
}

/*video box height*/
if (videoBox !== null) {
    require('./modules/functions/video')();
}

/*animation*/
if (animationLoad.length > 0) {
    require('./modules/functions/animation')(animationLoad);
}

window.addEventListener('scroll', () => {
    /*animation*/
    if (animationLoad.length > 0) {
        require('./modules/functions/animation')(animationLoad);
    }
});