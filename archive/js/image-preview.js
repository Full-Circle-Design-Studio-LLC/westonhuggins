previewing = false;
gallery = document.querySelectorAll('.image-gallery__image_hidden');
previewBackground = document.querySelector('.image-preview-container');
imageCountDiv = document.getElementById('image-counter');

upperLimit = gallery.length-1;
document.getElementById('image-total').innerHTML = gallery.length;

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
            previewBackground.classList.add('image-preview-container_show');
            previewing = true;
            setImageCount();
        }
    }
}

function closePreview() {
    previewBackground.classList.remove('image-preview-container_show');
    currentImage.style.display = 'none';
}

function navigatePreview(event) {
    if (!previewing) {
        return;
    }
    if (event.code == 'ArrowRight') {
        changeImage('right');
    }
    if (event.code == 'ArrowLeft') {
        changeImage('left');
    }
    if (event.code == 'Escape') {
        closePreview();
    }
}

function changeImage(direction) {
    if (direction == 'left' && currentIndex > 0) {
        currentIndex -= 1;
    } else if (direction == 'right' && currentIndex < upperLimit) {
        currentIndex += 1;
    }
    currentImage.style.display = 'none';
    currentImage = gallery[currentIndex];
    currentImage.style.display = 'block';
    setImageCount();
}

function setImageCount() {
    imageCountDiv.innerHTML = currentIndex+1;
}