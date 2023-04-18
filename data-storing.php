<?php $pageTitle = 'Other Tests - Weston Huggins'; ?>
<?php include('component-head.php'); ?>


<div class="page-content page-content_no-hero">

<?php
// $mysqli = new mysqli("localhost","root","","numberinput");

// // Check connection
// if ($mysqli -> connect_errno) {
//   echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
//   exit();
// }

$servername = "localhost";
$username = "root";
$password = "password";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";

$sqlquery = "INSERT INTO inputnumbers ( number ) VALUES
( 77 )";

?>

<form>
    <label for="number-input">Enter a number</label>
    <input type="number" id="number-input" name="number-input"></input>
    <input type="submit" value="Submit"></input>
</form>

</div>

</body>
</html>