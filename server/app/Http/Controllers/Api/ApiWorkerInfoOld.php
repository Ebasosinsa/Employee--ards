<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\WorkerInfo;
use App\Services\Response\ResponseService;
use App\Services\WorkerInfo\WorkerInfoService;
use Illuminate\Http\Request;

class ApiWorkerInfoOld extends ApiController
{
/* public function __construct(WorkerInfoService $service)
    {
        $this->service = $service;
    }*/

    public function store(Request $request){
        /*$workerInfo = new WorkerInfo;
        $workerInfo -> fio_worker = $request -> fio_worker;
        $workerInfo -> categories_worker = $request -> categories_worker;
        $workerInfo -> positions_worker = $request -> positions_worker;
        $workerInfo ->  birthday_worker = $request ->  birthday_worker;
        $workerInfo -> departments_worker = $request -> departments_worker;
        $workerInfo -> gender_worker = $request -> gender_worker;
        $workerInfo -> competency_worker = $request -> competency_worker;
        $workerInfo -> date_hiring_worker = $request -> date_hiring_worker;
        $workerInfo -> date_layoff_worker = $request -> date_layoff_worker;
        $workerInfo -> note_worker = $request -> note_worker;
        $workerInfo -> photo_worker = $request -> photo_worker;
        $result = $workerInfo -> save();*/
        return   ['asdasdasd'/* , $result*/];}
    /*
        
        $workerInfo = WorkerInfo::create([
            'fio_worker' => $request -> fio_worker,
            'categories_worker' => $request -> categories_worker,
            'positions_worker' => $request -> positions_worker,
            'birthday_worker' => $request ->  birthday_worker,
            'departments_worker' => $request -> departments_worker
        ]);
        
      
       /* $workerInfo = $this->service->saveItems($request, $workerInfo);
        return ResponseService::sendJsonResponse (
            [
                'items' => $workerInfo->toArray()
            ]

        );*/
    }



