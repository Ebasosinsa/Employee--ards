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

    public function filter(Request $request) {

        $query = GtWorkerPosition::query();
        $filteredDepartment = GtWorkerPosition::all()->toJson();
        // Проверяем, существует ли параметр запроса 'filter'
        if ($request->has('filter') || $request !== '') {
            $filter = $request->get('filter');
            // Добавляем условие фильтрации (например, по полю 'name_gt_worker_positions')
            $query->where('name_gt_worker_positions', 'like', "%{$filter}%");
            $filteredDepartment = $query->get()->toJson();
        }
        return $filteredDepartment;
    }
}