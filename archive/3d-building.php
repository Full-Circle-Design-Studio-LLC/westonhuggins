<?php $pageTitle = '3D Tests - Weston Huggins'; ?>
<?php include('component-head.php'); ?>

<div class="page-content page-content_no-hero">

<h1>3D Building</h1>


</div>

<div class="slider-container">
  Rotate Building
  <input type="range" min="0" max="6.28319" value="0" step="0.1" class="slider-container__slider" id="slider-y">
</div>


<script type="importmap">
  {
    "imports": {
      "three": "https://unpkg.com/three@0.150.1/build/three.module.js",
      "three/addons/": "https://unpkg.com/three@0.150.1/examples/jsm/"
    }
  }
</script>
<script type="module" src="js/3d-building.js"></script>

</body>
</html>