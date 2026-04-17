<?php
session_start();

if (!isset($_SESSION['user_id'])) {
    http_response_code(401);
    echo json_encode(["erro" => "Não autorizado"]);
    exit;
}