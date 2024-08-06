<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\AfWorkerPosition;
use App\Services\AfWorkerPosition\AfWorkerPositionService;

class ApiAfWorkerPosition extends ApiController
{
    public function __construct(AfWorkerPositionService $service)
    {
        $this->service = $service;
    }
    public function index(){
        $department = AfWorkerPosition::all()->toJson();
        return $department;
    }

    public function filter(Request $request) {
        $query = AfWorkerPosition::query();
        $filteredDepartment = AfWorkerPosition::all()->toJson();
        // Проверяем, существует ли параметр запроса 'filter'
        if ($request->has('filter') || $request !== '') {
            $filter = $request->get('filter');
            // Добавляем условие фильтрации (например, по полю 'name_gt_worker_positions')
            $query->where('name_af_worker_positions', 'like', "%{$filter}%");
            $filteredDepartment = $query->get()->toJson();
        }
        return $filteredDepartment;
    }
}