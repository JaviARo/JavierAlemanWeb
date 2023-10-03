<?php
session_start();

require __DIR__ . '/../../vendor/autoload.php';

$_SESSION['enviado'] = "si";

$nombre = $_POST['nombre'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];

$host = "localhost";
$dbname = "mensajemiweb";
$username = "root";
$password = "";

$conn = mysqli_connect(hostname: $host,
               username: $username,
               password: $password,
               database: $dbname);

if (mysqli_connect_errno()) {
    die("Connection error: " . mysqli_connect_errno());
}

$sql = "INSERT INTO mensajes (nombre, email, mensaje) VALUES (?,?,?)";

$stmt = mysqli_stmt_init($conn);

if (! mysqli_stmt_prepare($stmt, $sql)) {
    die(mysqli_errno($conn));
}

mysqli_stmt_bind_param(
  $stmt, "sss",
  $nombre,
  $email,
  $mensaje       
);

mysqli_stmt_execute($stmt);

header("location:../index.php");
?>