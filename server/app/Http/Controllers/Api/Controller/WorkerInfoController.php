<?php

namespace App\Http\Controllers\Api\Controller;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class WorkerInfoController extends ApiController
{
    //
    public function __construct(WorkerInfoService $service){
        $this->service = $service;
    }
}
