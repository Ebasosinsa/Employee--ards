<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\WorkerCaregory;
use App\Services\Response\ResponseService;
use App\Services\WorkerCategory\WorkerCategoryService;


class ApiCategory extends ApiController
{
public function __construct(WorkerCategoryService $service)
{
    $this->service = $service;
}
    /*public function index(){
        $category = $this->service->getItems()->toJson();
        /*return ResponseService::sendJsonResponse (
            true,
            [
                'items' => $this->service->getItems()->toArray()
                'items' => $category,
            ], 333, 'rebota'

        );
        return $category;*/

    public function index(){
        $category = WorkerCaregory::all()->toJson();
        return ($category);
    
    }
}

