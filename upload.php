<?php
$uploadDir = "uploads/";

if (!file_exists($uploadDir)) {
    mkdir($uploadDir, 0777, true);
}

if ($_SERVER['REQUEST_METHOD'] == "POST" && isset($_FILES['notes'])) {
    $fileTmpPath = $_FILES['notes']['tmp_name'];
    $fileName = basename($_FILES['notes']['name']);
    $safeFileName = preg_replace("/[^a-zA-Z0-9\.\-_]/", "_", $fileName);
    $destination = $uploadDir . $safeFileName;

    if (move_uploaded_file($fileTmpPath, $destination)) {
        echo "<p style='text-align:center;'>✅ File uploaded successfully: <a href='$destination'>Download</a></p>";
    } else {
        echo "<p style='text-align:center;color:red;'>❌ Error uploading the file.</p>";
    }
} else {
    echo "<p style='text-align:center;color:red;'>❌ No file uploaded.</p>";
}
?>
