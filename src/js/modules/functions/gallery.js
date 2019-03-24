module.exports = (wrap) => {
    const axios = require('axios');

    const galleryWrap = wrap.querySelector('.gallery-photo');
    const categoryArr = wrap.querySelectorAll('.gallery-category > .gallery-category__item');
    let attribute;


    axios.get('/gallery.json')
        .then(function (response) {
            imgRender(response.data, attribute);
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
            // always executed
        });

    

    function imgRender(arr, attribute) {
        if (attribute !== undefined) {
            console.log(attribute);
            let imgRender = arr;
            console.log(imgRender);
            let img = document.createElement('img');
            for (let i = 0; i < imgRender.length; i++) {
                img[i] = document.createElement('img');
                img[i].src = imgRender[i].src;
                img[i].classList.add('gallery-photo__item');
                galleryWrap.appendChild(img[i]);
            }
        } else if (attribute === undefined) {
            let imgRender = arr;
            console.log(imgRender);
            let img = document.createElement('img');
            for (let i = 0; i < imgRender.length; i++) {
                img[i] = document.createElement('img');
                img[i].src = imgRender[i].src;
                img[i].classList.add('gallery-photo__item');
                galleryWrap.appendChild(img[i]);
            }
        }
    }

    for (let i = 0; i < categoryArr.length; i++) {
        categoryArr[i].addEventListener('click', function (event) {
            attribute = categoryArr[i].getAttribute('data-category');
            console.log(attribute);
        });
    }


    /*let url = 'gallery.json';
    let request = new XMLHttpRequest();

    request.open('GET', url);

    request.responseType = 'json';
    request.send();

    request.onload = () => {
        let imgArr = request.response;
        imgRender(imgArr, attribute);
    };




    function removeImg(arr) {
        for (let i = 0; i < arr.length; i++) {
            arr[i].remove();
        }
    }


    function imgRender(arr, attribute) {
        let imgRender = arr['retouch'];
        console.log(imgRender);
        let img = document.createElement('img');
        for (let i = 0; i < imgRender.length; i++) {
            img[i] = document.createElement('img');
            img[i].src = arr.retouch[i].src;
            img[i].classList.add('gallery-photo__item');
            galleryWrap.appendChild(img[i]);
        }
    }*/

};