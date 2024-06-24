<?php

namespace App\Http\Controllers\Api\Controller;

use App\Http\Controllers\Controller;
use App\Services\Response\ResponseService;
use App\Services\WorkerCategory\WorkerCategoryService;
use Illuminate\Http\Request;

;

class WorkerCategoryController extends ApiController
{
    //
    public function __construct(WorkerCategoryService $service){
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