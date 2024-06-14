<?php

namespace App\Http\Controllers\Api\Controller;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class WorkerDepartmentController extends ApiController
{
    //
    public function __construct(WorkerDepartmentService $service){
        $this->service = $service;
    }

    public function index() {
        return ResponseService::sendJsonResponse(
         true,
             [
                'items'=>$this->service->getItems()->toArray()
             ]
        );
    }

}
