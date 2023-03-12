<?php $pageTitle = '3D Tests - Weston Huggins'; ?>
<?php include('component-head.php'); ?>

<div class="page-content page-content_no-hero">

<h1>3D Tests</h1>
<p>This page is used for testing the implementation of 3D assets on a webpage.</p>
<br>
<button id="rotate-cube-button">Rotate model Y</button>
<button id="rotate-cube-button-x">Rotate model X</button>

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