<?php $pageTitle = 'Image Preview - Weston Huggins'; ?>
<?php include('component-head.php'); ?>

<div class="page-content page-content_no-hero">

<h1>Image Preview JS Plugin</h1>
<p>Based off of <a href="https://lokeshdhakar.com/projects/lightbox2/" target="_blank">Lightbox</a>, the goal of this is to make a simple, fast, jQuery-free gallery with clickable images.</p>
<br><br>

<div class="image-preview-container">
    <div class="image-preview-background" onclick="closePreview()"></div>
    <img class="image-gallery__image_hidden" src="assets/1.jpg">
    <img class="image-gallery__image_hidden" src="assets/2.jpg">
    <img class="image-gallery__image_hidden" src="assets/3.jpg">
    <img class="image-gallery__image_hidden" src="assets/4.jpg">
    <img class="image-gallery__image_hidden" src="assets/5.jpg">
    <img class="image-gallery__image_hidden" src="assets/6.jpg">
    <img class="image-gallery__image_hidden" src="assets/7.jpg">
    <img class="image-gallery__image_hidden" src="assets/8.jpg">
    <img class="image-gallery__image_hidden" src="assets/9.jpg">
    <img class="image-gallery__image_hidden" src="assets/10.jpg">
    <img class="image-gallery__image_hidden" src="assets/11.jpg">
    <img class="image-gallery__image_hidden" src="assets/12.jpg">
    <div class="image-gallery__image-count"><button onclick="changeImage('left')"><</button>&nbspImage <span id="image-counter"></span> of <span id="image-total"></span>&nbsp<button onclick="changeImage('right')">></button></div>
</div>

<div class="image-gallery">
    <img class="image-gallery__image previewable" src="assets/1.jpg">
    <img class="image-gallery__image previewable" src="assets/2.jpg">
    <img class="image-gallery__image previewable" src="assets/3.jpg">
    <img class="image-gallery__image previewable" src="assets/4.jpg">
    <img class="image-gallery__image previewable" src="assets/5.jpg">
    <img class="image-gallery__image previewable" src="assets/6.jpg">
    <img class="image-gallery__image previewable" src="assets/7.jpg">
    <img class="image-gallery__image previewable" src="assets/8.jpg">
    <img class="image-gallery__image previewable" src="assets/9.jpg">
    <img class="image-gallery__image previewable" src="assets/10.jpg">
    <img class="image-gallery__image previewable" src="assets/11.jpg">
    <img class="image-gallery__image previewable" src="assets/12.jpg">
</div>

</div>

<script src="js/image-preview.js"></script>

</body>
</html>