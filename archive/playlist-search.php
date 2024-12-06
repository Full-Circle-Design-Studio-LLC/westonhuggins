<!DOCTYPE html>
<html lang="en">
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<link rel="stylesheet" href="style.css">
<title>Playlist App - Search</title>
<body class="playlist-app">

<nav class="red-bg">
    <a href="./playlist-app.php" aria-label="playlist app home">LOGO</a>
</nav>

<div class="app">
    <section class="top-fold">
        <form class="create-playlist-form lightblue-bg white">
            <h1>Create Playlist</h1>
            <h4>Add Songs!</h4>
            <div class="form-field">
                <label for="playlist-name">Search by song, album, or artist</label>
                <input type="search" id="playlist-name" name="playlist-name" required>
            </div>
            <ul class="search-results">
                <li class="search-results__item" data-selected="false">
                    <img class="search-results__item__img" src="./assets/monkey-5.png" width="50px" height="50px">
                    <span class="search-results__item__song">Song Name Here</span>
                    <span class="search-results__item__artist">Song Artist Here</span>
                    <div class="search-results__item__quick-add"></div>
                </li>
                <li class="search-results__item" data-selected="false">
                    <img class="search-results__item__img" src="./assets/monkey-5.png" width="50px" height="50px">
                    <span class="search-results__item__song">Song Name Here</span>
                    <span class="search-results__item__artist">Song Artist Here</span>
                    <div class="search-results__item__quick-add"></div>
                </li>
                <li class="search-results__item" data-selected="false">
                    <img class="search-results__item__img" src="./assets/monkey-5.png" width="50px" height="50px">
                    <span class="search-results__item__song">Song Name Here</span>
                    <span class="search-results__item__artist">Song Artist Here</span>
                    <div class="search-results__item__quick-add"></div>
                </li>
            </ul>
            <div class="form-field">
                <input type="submit" value="Create!" class="pl-button pl-button_red submit">
            </div>
        </form>
    </section>
</div>

<script src="./blocks/playlist-app/playlist-search.js"></script>
</body>
</html>