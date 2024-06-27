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
    <meta name="robots" content="noindex">

    <title> - Weston Huggins</title>
    
    <link rel="stylesheet" href="/style.css">
</head>
<body class="page-date theme-romance">

<?php if (isset($_GET['qr']) ) : ?>

    <section>
        <h1>Page Test</h1>
        <div class="subsection">
            <form id="theme-form">
                <label for="theme">Just for fun, pick your favorite genre:</label>
                <div id="theme-options">
                    <div>
                        <input type="radio" name="theme" value="romance" id="romance" checked />
                        <label for="romance">Romance</label>
                    </div>
                    <div>
                        <input type="radio" name="theme" value="mystery-crime" id="mystery-crime" />
                        <label for="mystery-crime">Mystery/Crime</label>
                    </div>
                    <div>
                        <input type="radio" name="theme" value="fantasy" id="fantasy" />
                        <label for="fantasy">Fantasy</label>
                    </div>
                    <div>
                        <input type="radio" name="theme" value="other" id="other" />
                        <label for="other">Other</label>
                    </div>
                </div>
            </form>
        </div>
        <div class="subsection">
            <h2>Why?</h2>
            <p>First of all, congratulations! By filling out this form you will have a chance at being my girlfriend!</p>
        </div>

        <div class="subsection">
            <h2>About me:</h2>
            <p>Hi! My name is Weston Huggins and I’m 23 years old. I was born and raised in West Virginia and have lived in Arlington for almost a year now.</p>
            <p>My hobbies include reading <a href="https://www.goodreads.com/user/show/159380140-weston" target="_blank">(here's my Goodreads)</a>, spending time outdoors, going to bars, exploring new areas, working out, and cooking.</p>
            <p>I love wine and I've been collecting cat wine bottles. Here’s my collection so far:</p>
            <img id="cat-wine" src="/assets/date/cat-wine.jpeg" alt="cat-shaped wine bottles">
            <p><strong>Pros:</strong></p>
            <ul>
                <li>Financially responsible: I have a budget, full-time job with benefits and 401(k), and excellent credit</li>
                <li>I like to give gifts so I will buy you flowers and fun trinkets and things</li>
            </ul>
            <p><strong>Cons:</strong></p>
            <ul>
                <li>Big Kanye fan</li>
            </ul>
            <p><strong>Some facts about me:</strong></p>
            <ul>
                <li>I just moved to DFW last August and love it so far!</li>
                <li>I own a graphic design agency with my brother</li>
                <li>I have a dog named Sage</li>
            </ul>
            <p><strong>Perks of dating me:</strong></p>
            <ul>
                <li>I have a full time job (with benefits and 401(k))</li>
                <li>Bachelors degree</li>
                <li>Can cook</li>
                <li>Blood donor (I save lives no big deal)</li>
            </ul>
            <h3>Gallery</h3>
            <div class="date-gallery">
                <figure>
                    <img src="../assets/date/milk.png" alt="">
                    <figcaption>Drinking milk in the workplace. Committed to the bulk 💪</figcaption>
                </figure>
                <figure>
                    <img src="../assets/date/monkey.jpg" alt="">
                    <figcaption>Playing on the monkey bars with my coworker 🙈</figcaption>
                </figure>
                <figure>
                    <img src="../assets/date/sage.jpg" alt="">
                    <figcaption>Me and my dog Sage</figcaption>
                </figure>
                <figure>
                    <img src="../assets/date/show.jpg" alt="">
                    <figcaption>Drinking best Texas beer. Shiner</figcaption>
                </figure>
                <figure>
                    <img src="../assets/date/karaoke.jpg" alt="">
                    <figcaption>Karaoke!!</figcaption>
                </figure>
                <figure>
                    <img src="../assets/date/block.jpeg" alt="">
                    <figcaption>Climbing structures 🕋</figcaption>
                </figure>
            </div>
        </div>

        <form class="subsection" id="date-form"  action="submit.php" method="post" enctype="multipart/form-data">
            <h2>Application</h2>
            <span><span class="required">*</span> indicates required field</span>
            <h3>Basic Questions:</h3>
            <label for="name">
                <span><span class="required">*</span> Name</span>
                <input type="text" name="name" id="name" required>
            </label>
            <label for="contact">
                <span><span class="required">*</span> Email or Phone Number</span>
                <input type="text" name="contact" id="contact" required>
            </label>
            <label for="age">
                <span><span class="required">*</span> How old are you?</span>
                <input type="number" name="age" id="age" required>
            </label>
            <h3>Tell me about YOU</h3>
            <label for="icecream2">
                In general, will you drop everything to go get ice cream at a moment's notice? Why or why not?
                <textarea name="icecream2" id="icecream2"></textarea>
            </label>
            <label for="travel">
                Where is your favorite place you've traveled? What did you like most about it?
                <textarea name="travel" id="travel"></textarea>
            </label>
            <label for="hobby">
                What are your hobbies? Or something you're passionate about?
                <textarea name="hobby" id="hobby"></textarea>
            </label>
            <img src="../assets/date/dog-3.jpg" alt="dog in basket">
            <label for="dog">
                What do you think of my brother's dog? (she's the funny-looking one in the basket)
                <textarea name="dog" id="dog"></textarea>
            </label>
            <label for="acorn">
                Will you get mad at me if I kick acorns and rocks when we go on walks together?
                <textarea name="acorn" id="acorn"></textarea>
            </label>
            
            <h3>Final Things:</h3>

            <label for="photos">
                Please provide a few photos of yourself
                <input type="file" name="photos" id="photos" accept="image/*" multiple>
            </label>
            <label for="more">
                Anything else you'd like to share about yourself? Have questions for me?
                <textarea name="more" id="more"></textarea>
            </label>
            <input type="submit" value="SUBMIT APPLICATION">
        </form>

    </section>
<?php endif; ?>

<script src="/blocks/date/date.js"></script>
</body>
</html>