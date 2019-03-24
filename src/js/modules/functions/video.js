module.exports = () => {

    /*
    *
    * Variables
    *
    */


    const header = document.querySelector('.header-main');
    const videoBox = document.querySelector('.video-box');
    let headerHeight;

    headerHeight = header.clientHeight;
    videoBox.style.height = `calc(100vh - ${headerHeight}px)`;

    document.documentElement.addEventListener('resize', (event) => {
        headerHeight = header.clientHeight;
        videoBox.style.height = `calc(100vh - ${headerHeight}px)`;
    });


};