<?php
require_once __DIR__ . '/../config/db.php';
require_once __DIR__ . '/../utils/response.php';

class AuthController {

    public static function login() {
        global $pdo;

        $data = json_decode(file_get_contents("php://input"), true);

        $email = $data['email'] ?? '';
        $senha = $data['senha'] ?? '';

        $stmt = $pdo->prepare("SELECT * FROM usuarios WHERE email = ?");
        $stmt->execute([$email]);

        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if (!$user || !password_verify($senha, $user['senha'])) {
            jsonResponse(["erro" => "Credenciais inválidas"], 401);
        }

        session_start();
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['is_admin'] = $user['is_admin'] ?? 0;

        jsonResponse(["msg" => "Login realizado"]);
    }

    public static function logout() {
        session_start();
        session_destroy();
        jsonResponse(["msg" => "Logout realizado"]);
    }
}