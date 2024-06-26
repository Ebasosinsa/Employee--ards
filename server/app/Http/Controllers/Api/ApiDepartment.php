<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\WorkerDepartment;
use App\Services\WorkerDepartment\WorkerDepartmentService;

class ApiDepartment extends ApiController
{
    public function __construct(WorkerDepartmentService $service)
    {
        $this->service = $service;
    }
    public function index(){
        $department = WorkerDepartment::all()->toJson();
        return $department;
    }
}
