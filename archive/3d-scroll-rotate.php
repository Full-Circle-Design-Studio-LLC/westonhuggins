<!DOCTYPE html>
<html lang="en">
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<link rel="stylesheet" href="style.css">
<title><?php if (isset($pageTitle)) {echo $pageTitle;} else {echo 'Weston Huggins';} ?></title>
<body class="scroll-rotate">

<nav class="nav">
    <a class="nav__item" href="index.php">Home</a>
</nav>

<script type="importmap">
  {
    "imports": {
      "three": "https://unpkg.com/three@0.150.1/build/three.module.js",
      "three/addons/": "https://unpkg.com/three@0.150.1/examples/jsm/"
    }
  }
</script>
<script type="module" src="js/3d-scroll.js"></script>

</body>
</html>