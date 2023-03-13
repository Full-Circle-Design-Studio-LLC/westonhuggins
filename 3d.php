<?php $pageTitle = '3D Tests - Weston Huggins'; ?>
<?php include('component-head.php'); ?>

<div class="page-content page-content_no-hero">

<h1>3D Tests</h1>
<p>This page is used for testing the implementation of 3D assets on a webpage.</p>
<br>
<div class="slider-container">
  Rotate along x axis
  <input type="range" min="0" max="6.28319" value="0" step="0.1" class="slider-container__slider" id="slider-x">
</div>
<div class="slider-container">
  Rotate along y axis
  <input type="range" min="0" max="6.28319" value="0" step="0.1" class="slider-container__slider" id="slider-y">
</div>
<br>
<div>*next add translate</div>
<div>*still need to figure out uploading custom assets</div>

</div>


<script type="importmap">
  {
    "imports": {
      "three": "https://unpkg.com/three@0.150.1/build/three.module.js",
      "three/addons/": "https://unpkg.com/three@0.150.1/examples/jsm/"
    }
  }
</script>
<script type="module" src="js/3d-setup.js"></script>

</body>
</html>