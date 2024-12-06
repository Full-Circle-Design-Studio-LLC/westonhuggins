<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    $to = "weston.huggins9@gmail.com";
    $subject = "New Contact Form Submission";
    $body = "Name: $name\nEmail: $email\nMessage:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you for your submission!<br><br>";
        echo '<a href="../index.php">Return home</a>';
    } else {
        echo "Oops! Something went wrong.";
    }
} else {
    // Redirect back to the form if accessed directly
    header("Location: index.html");
}
?>
