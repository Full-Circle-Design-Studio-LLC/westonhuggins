previewing = false;
gallery = document.querySelectorAll('.image-gallery__image_hidden');
previewBackground = document.querySelector('.image-preview-background');

upperLimit = gallery.length-1;

previewableImages = document.querySelectorAll('.previewable');
previewableImages.forEach(image => {
    image.addEventListener('click',previewImage);
})

document.addEventListener('keydown', navigatePreview);

function previewImage() {
    for (i = 0; i < gallery.length; i++) {
        if (gallery[i].src == this.src) {
            currentImage = gallery[i];
            currentIndex = i;
            currentImage.style.display = 'block';
            console.log(currentImage);
            previewBackground.classList.add('image-preview-background_show');
            previewing = true;
        }
    }
}

function closePreview() {
    previewBackground.classList.remove('image-preview-background_show');
    currentImage.style.display = 'none';
}

function navigatePreview(event) {
    if (!previewing) {
        return;
    }
    if (event.code == 'ArrowRight') {
        if (currentIndex >= upperLimit) {
            return;
        }
        currentIndex += 1;

        changeImage();
    }
    if (event.code == 'ArrowLeft') {
        if (currentIndex <= 0) {
            return;
        }
        currentIndex -= 1;
        changeImage();
    }
    if (event.code == 'Escape') {
        closePreview();
    }
}

function changeImage() {
    currentImage.style.display = 'none';
    currentImage = gallery[currentIndex];
    currentImage.style.display = 'block';
}