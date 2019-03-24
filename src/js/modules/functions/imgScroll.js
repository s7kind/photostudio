module.exports = (wrap) => {

    /*
    *
    * Variables
    *
    */
    const imgBox = document.querySelectorAll('.photo-list__elem');
    const scrollLine = wrap.querySelector('.photo-scroll');
    let imgWrap, offsetX, imgWrapArr;

    document.addEventListener('mousemove', function (event) {
        for (let i = 0; i < imgBox.length; i++) {
            if (imgBox[i].classList.contains('active')) {
                imgWrap = imgBox[i].querySelector('.photo-list__wrap');
                imgBox[i].addEventListener('mousemove', function (event) {
                    offsetX = event.offsetX;
                    scrollLine.style.left = `${offsetX}px`;
                    imgWrap.style.width = `${offsetX}px`;
                    console.log(offsetX);
                });
            } else {
                imgWrapArr = document.querySelectorAll('.photo-list__wrap');
                imgWrapArr[i].style.width = `${offsetX}px`;
            }
        }
    });




};