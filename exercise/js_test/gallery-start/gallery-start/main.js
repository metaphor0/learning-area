const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
images.map(image => {

    let pic = document.createElement('img');
    pic.setAttribute('class', '.thumb-bar img');
    thumbBar.appendChild(pic);

    pic.addEventListener('click', function () {
        let displayed_src = displayedImage.getAttribute('src');
        displayed_src = 'images/' + image;
    })

})

/* Looping through images */
// const newImage = document.createElement('img');
// newImage.setAttribute('src', xxx);
// newImage.setAttribute('alt', xxx);
// thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
btn.addEventListener('onclick', function () {

    let btn_class = btn.getAttribute('class');

    if (btn_class == 'dark') {

        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";

    } else {

        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = "rgba(0,0,0,0)";

    }

})