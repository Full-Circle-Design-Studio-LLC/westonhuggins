<?php $pageTitle = 'Home - Weston Huggins'; ?>
<?php include('./inc/component-head.php'); ?>

<div class="page-content">

    <section>
      <div class="content-box">
        <img class="weston" src="./assets/west-2.png" alt="Weston Huggins">
        <h1>Weston Huggins</h1>
        <p>Hi, my name is Weston and I'm a full stack WordPress developer with more than three years of experience. My specialties are in custom WordPress theme development.</p>
        <p>I currently live in Dallas where I work as Marketing Technology Specialist for CEC Entertainment (Chuck E. Cheese!) and own a web design agency called <a href="https://fullcircledesign.org/" target="_blank">Full Circle Design Studio</a>.</p>
      </div>
    </section>
    
    <section>
      <div class="content-box">
        <form id="home-contact" action="./inc/home_email.php" method="post">
          <h2>Contact</h2>
          <label for="name">
            Name
            <input type="text" name="name" id="name">
          </label>
          <label for="email">
            Email
            <input type="email" name="email" id="email" required>
          </label>
          <label for="message">
            Message
            <textarea name="message" id="message" required></textarea>
          </label>
          <input type="submit" value="Submit">
        </form>
      </div>
    </section>

</div>

</body>
</html>