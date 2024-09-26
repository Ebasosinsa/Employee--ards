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
        $departments = WorkerDepartment::all()->toJson();
        return $departments;
    }
    public function show($id_department)
    {
        $department = WorkerDepartment::where('id_departments', $id_department)->first();
        // $workerInfo = WorkerInfo::all('fio_worker', 'departments_worker')
        //     ->where('departments_worker', '2')
        if (!$department) {
            return response()->json(['message' => 'Department not found'], 404);
        }

        return response()->json($department, 200);
    }
}
