document.addEventListener("DOMContentLoaded", function () {
    const main1 = document.querySelector(".main-1");
    const images = [
        "./images/bg1.jpg",
        "./images/bg2.jpg",
        "./images/bg3.jpg",
        "./images/bg4.jpg",
        "./images/bg5.jpg",
        "./images/bg6.jpg"
    ];
    
    let index = 0;
    
    function changeBackground() {
        main1.style.backgroundImage = `url('${images[index]}')`;
        index = (index + 1) % images.length;
    }
    
    setInterval(changeBackground, 200);
});
