<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['contact'];
    $age = $_POST['age'];
    $ice_cream = $_POST['icecream2'];
    $travel = $_POST['travel'];
    $hobby = $_POST['hobby'];
    $dog = $_POST['dog'];
    $acorn = $_POST['acorn'];
    $photos = $_POST['photos'];
    $more = $_POST['more'];

     // File upload
     $file_name = $_FILES['file']['name'];
     $file_temp = $_FILES['file']['tmp_name'];
     $file_size = $_FILES['file']['size'];
     $file_type = $_FILES['file']['type'];
     
     // Destination directory for uploaded files
     $upload_dir = "uploads/"; // Create a directory named "uploads" in the same directory as your PHP script
 
     // Move uploaded file to destination directory
     $destination = $upload_dir . $file_name;
     if (move_uploaded_file($file_temp, $destination)) {
         // File uploaded successfully
         echo "File uploaded successfully.";
     } else {
         // Error uploading file
         echo "Error uploading file.";
     }
    
    $to = "weston.huggins9@gmail.com";
    $subject = "New Form Submission";
    $body = 
        "
        <strong>Basic Questions</strong>\n
        Name: $name\n
        Email: $email\n
        Age:\n $age
        \n
        Tell me about YOU
        \n
        In general, will you drop everything to go get ice cream at a moment's notice? Why or why not?
        \n
        $ice_cream\n
        Where is your favorite place you've traveled? What did you like most about it?
        $travel\n
        What are your hobbies? Or something you're passionate about?
        $hobby\n
        What do you think of my brother's dog? (she's the one in the basket)
        $dog\n
        Will you get mad at me if I kick acorns and rocks when we go on walks together?
        $acorn\n
        Anything else you'd like to share about yourself? Have questions for me?
        $more\n
    ";

    // Attach uploaded file to email
    $attachment = chunk_split(base64_encode(file_get_contents($destination)));
    $headers .= "\nMIME-Version: 1.0\nContent-Type: multipart/mixed; boundary=\"multipart_boundary\"\n";
    $body = "--multipart_boundary\nContent-Type: text/plain; charset=UTF-8\n\n$body\n\n";
    $body .= "--multipart_boundary\nContent-Type: $file_type; name=\"$file_name\"\nContent-Transfer-Encoding: base64\nContent-Disposition: attachment\n\n$attachment\n\n";


    // Send email with attachment
    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you for your submission!";
    } else {
        echo "Oops! Something went wrong.";
    }

    // Delete uploaded file after sending email
    // unlink($destination);
} else {
    // Redirect back to the form if accessed directly
    header("Location: index.html");
}
?>
