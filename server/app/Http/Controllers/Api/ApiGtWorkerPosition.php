<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\GtWorkerPosition;
use App\Services\GtWorkerPosition\GtWorkerPositionService;

class ApiGtWorkerPosition extends ApiController
{
    public function __construct(GtWorkerPositionService $service)
    {
        $this->service = $service;
    }
    public function index(){
        $department = GtWorkerPosition::all()->toJson();
        return $department;
    }
}