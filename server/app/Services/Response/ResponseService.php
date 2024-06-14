<?php
/* Сервис унифицированных ответов для передачи на фронтенд в формате JSON */ 

namespace App\Services\Response;

class ResponseService { 
  public static function sendJsonResponse($status, $data = [], $code = 200, $errors = []) {
  return response()->json([
    'status' => $status,
    'data' => $data,
    'errors' => $errors,
  ], $code);
}
}

