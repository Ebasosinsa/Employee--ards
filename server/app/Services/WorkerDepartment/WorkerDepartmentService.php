<?php
/* Сервис фирм компании */ 

namespace App\Services\WorkerDepartment;
use App\Models\worker_department;

class WorkerDepartmentService { 
  public function getItems(){
    return worker_department::all();
  }
}