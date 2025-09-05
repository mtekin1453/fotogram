const fotoImages = [
    "1.jpg",
    "11-1024x1024.jpg",
    "12.jpg",
    "13-1024x1024.jpg",
    "14-1024x1024.jpg",
    "14.jpg",
    "15-1024x1024.jpg",
    "15.jpg",
    "16-1024x1024.jpg",
    "16.jpg",
    "17-1024x1024.jpg",
    "18-1024x1024.jpg",
    "18.jpg",
    "19-1024x1024.jpg",
    "2.jpg",
    "21-1024x1024.jpg",
    "22-1024x1024.jpg",
    "23.jpg",
    "24-1024x1024.jpg",
    "24.jpg",
    "25-1024x1024.jpg",
    "25.jpg",
    "26.jpg",
    "27.jpg",
    "28.jpg",
    "29-1024x1024.jpg",
    "30-1024x1024.jpg",
    "30.jpg",
    "31-1024x1024.jpg",
    "31.jpg",
    "32.jpg",
    "33.jpg",
    "35.jpg",
    "36.jpg",
    "37.jpg",
    "39.jpg",
    "40.jpg",
    "41.jpg",
    "42.jpg",
    "44.jpg",
    "45.jpg",
    "48.jpg",
    "49.jpg",
    "5.jpg",
    "54.jpg",
    "55.jpg",
    "56.jpg",
    "8-1024x1024.jpg",
    "9-1024x1024.jpg",
    "baeckerzubereitung.jpg",
    "bakery.jpg",
    "bakeryman.jpg",
    "bakeryman2.jpg",
    "bakerywithegg.jpg",
    "baklava-speziell.jpg",
    "chocolate-baking.jpg",
    "coffee.jpg",
    "cookieschoko.jpg",
    "croissant.jpg",
    "sesamringe.jpg",
    "sweet-baklava.jpg",
    "torte-mit-kirschen.jpg",
    "zubereitung.jpg",
    "überuns.jpg"
];


function init() {
    renderImages();
}

function renderImages() {
    let content = document.getElementById('image-galery');
    content.innerHTML = '';

    for (let index = 0; index < fotoImages.length; index++) {
        const element = fotoImages[index];

        content.innerHTML += renderImagesHTML(index, element);

    }

}

function renderImagesHTML(i, imageurl) {
    return `
    <div id="container${i}" onclick="openDialog(${i})">
        <img src="./img2/${imageurl}">
    </div>
    `;
}

let currentIndex = 0;

function openDialog(i) {
    currentIndex = i; // global merken

    const content2 = document.getElementById('main-fenster');
    const content = document.getElementById('image-open-section');

    content2.classList.remove('hidden');
    content.classList.remove('hidden');

    content.innerHTML = '';

    const currentImage = fotoImages[i];

    content.innerHTML = `
            <div class="openDialogSec01 flex-between">
                <p>${currentImage}</p>
                <img id="close-icon" class="closeIcon icon" src="./img/close-window-32.png">
            </div>

            <div>
                <img id="image${currentIndex}" class="openDialogImage openDialogImage.slide-left" src="./img2/${currentImage}">
            </div>

            <div class="arrowsSection flex-around">
                <div class="arrowLeftSection"><img id="arrow-left" class="icon" src="./img/arrowleft.png"></div>
                <div class="arrowsImageSection flex-center"><span>${currentIndex + 1}/${fotoImages.length}</span></div>
                <div class="arrowRightSection"><img id="arrow-right" class="icon" src="./img/arrowright.png"></div>
            </div>
    `;

    // Event Listener hinzufügen
    document.getElementById('close-icon').addEventListener('click', closeDialog);
    document.getElementById('arrow-left').addEventListener('click', () => arrowLeft(i));
    document.getElementById('arrow-right').addEventListener('click', () => arrowRight(i));

    // Keyboard-Steuerung aktivieren
    document.addEventListener('keydown', handleKey);

    // Bild-Animation starten
    const img = document.querySelector('.openDialogImage');
    requestAnimationFrame(() => img.classList.add('visible'));

    // Pfeile ein-/ausblenden
    updateArrows();


}


function updateArrows() {
    // Pfeile ein-/ausblenden
    document.getElementById('arrow-left').classList.toggle('hidden', currentIndex === 0);
    document.getElementById('arrow-right').classList.toggle('hidden', currentIndex === fotoImages.length - 1);
}


function arrowLeft() {
    if (currentIndex > 0) {
        openDialog(currentIndex - 1);
    }
}

function arrowRight() {
    if (currentIndex < fotoImages.length - 1) {
        openDialog(currentIndex + 1);
    }
}


function closeDialog() {
    document.getElementById('main-fenster').classList.add('hidden');
    document.getElementById('image-open-section').classList.add('hidden');
}

function handleKey(event) {
    switch (event.key) {
        case 'ArrowLeft':
            arrowLeft();
            break;
        case 'ArrowRight':
            arrowRight();
            break;
        case 'Escape':
            closeDialog();
            break;
    }
}
