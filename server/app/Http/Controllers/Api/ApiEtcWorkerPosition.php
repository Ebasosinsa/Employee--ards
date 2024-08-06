<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\EtcWorkerPosition;
use App\Services\EtcWorkerPosition\EtcWorkerPositionService;

class ApiEtcWorkerPosition extends ApiController
{
    public function __construct(EtcWorkerPositionService $service)
    {
        $this->service = $service;
    }
    public function index(){
        $department = EtcWorkerPosition::all()->toJson();
        return $department;
    }

    public function filter(Request $request) {
        $query = EtcWorkerPosition::query();
        $filteredDepartment = EtcWorkerPosition::all()->toJson();
        // Проверяем, существует ли параметр запроса 'filter'
        if ($request->has('filter') || $request !== '') {
            $filter = $request->get('filter');
            // Добавляем условие фильтрации (например, по полю 'name_gt_worker_positions')
            $query->where('name_etc_worker_positions', 'like', "%{$filter}%");
            $filteredDepartment = $query->get()->toJson();
        }
        return $filteredDepartment;
    }
}