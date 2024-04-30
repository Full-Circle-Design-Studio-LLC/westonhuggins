<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-ENYYVD4H7E"></script>
    <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-ENYYVD4H7E');
    </script>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <?php if ( isset($noindex) ) : ?>
        <meta name="robots" content="noindex">
    <?php endif; ?>

    <title><?php if (isset($pageTitle)) {echo $pageTitle;} else {echo 'Weston Huggins';} ?></title>
    
    <link rel="stylesheet" href="/style.css">
</head>
<body class="<?php if ( isset($bodyClass) ) {echo $bodyClass;} ?>">

<nav class="nav">
    <a class="nav__item" href="/index.php">Home</a>
    <a class="nav__item" href="/portfolio.php">Portfolio</a>
</nav>