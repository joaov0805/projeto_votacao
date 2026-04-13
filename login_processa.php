<?php
session_start();
require "db.php";

$stmt = $pdo->prepare("SELECT * FROM usuarios WHERE email=?");
$stmt->execute([$_POST['email']]);
$user = $stmt->fetch();

if (!$user || !password_verify($_POST['senha'], $user['senha'])) {
    exit("Credenciais inválidas");
}

session_regenerate_id(true);
$_SESSION["id"] = $user["id"];
$_SESSION["tipo"] = $user["tipo"];

if ($user["senha_temporaria"])
    header("Location: alterar_senha.php");
else
    header("Location: votar.php");