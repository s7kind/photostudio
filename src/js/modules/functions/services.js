module.exports = (wrap) => {


    const serviceElems = wrap.querySelectorAll('.services-left__list-elem > .list-item');
    const photoElems = wrap.querySelectorAll('.photo-list > .photo-list__elem');

    for (let i = 0; i < serviceElems.length; i++) {
        serviceElems[i].addEventListener('click', (event) => {
            removeActive(serviceElems);
            removeActive(photoElems);
            serviceElems[i].classList.add('active');
            photoElems[i].classList.add('active');
        });
    }

    photoElems[0].classList.add('active');
    serviceElems[0].classList.add('active');


    function removeActive(arr) {
        for (let i = 0; i < arr.length; i++) {
            arr[i].classList.remove('active');
        }
    }

};
