<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\WorkerInfo\WorkerInfoService;
use Illuminate\Http\Request;

class ApiWorkerInfo extends ApiController
{
    public function __construct(WorkerInfoService $service)
    {
        $this->service = $service;
    }
}
