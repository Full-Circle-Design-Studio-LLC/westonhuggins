<?php $pageTitle = 'Other Tests - Weston Huggins'; ?>
<?php include('component-head.php'); ?>

<?php
$mysqli = new mysqli("localhost","root","","numberinput");

// Check connection
if ($mysqli -> connect_errno) {
  echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
  exit();
}
?>


<div class="page-content page-content_no-hero">

<form>
    <label for="number-input">Enter a number</label>
    <input type="number" id="number-input" name="number-input"></input>
    <input type="submit" value="Submit"></input>
</form>

</div>

</body>
</html>