<!DOCTYPE html>
<html lang="en">
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<link rel="stylesheet" href="style.css">
<title>Playlist App - Create</title>
<body class="playlist-app">

<nav class="red-bg">
    <a href="./playlist-app.php" aria-label="playlist app home">LOGO</a>
</nav>

<div class="app">
    <section class="top-fold">
        <form class="create-playlist-form lightblue-bg white">
            <h1>Create Playlist</h1>
            <div class="form-field">
                <label for="playlist-name">* Playlist Name</label>
                <input type="text" id="playlist-name" name="playlist-name" required>
            </div>
            <div class="form-field">
                <label for="playlist-name">Playlist Description</label>
                <input type="text" id="playlist-description" name="playlist-description">
            </div>
            <div class="form-field">
                <label for="playlist-image">Playlist Image</label>
                <input id="playlist-image" name="playlist-image" type="file" accept="image/*">
            </div>
            <div class="form-field">
                <input type="submit" value="Create!" class="pl-button pl-button_red submit">
            </div>
        </form>
    </section>
    <div class="button-container">
        <button class="button-test">Click Here!</button>    
    </div>
</div>

</body>
</html>