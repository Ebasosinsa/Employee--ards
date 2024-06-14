<?php
/* Сервис фирм компании */ 

namespace App\Services\WorkerDepartment;

class WorkerDepartmentService { 
  public function getItems(){
    return Status::all();
  }
}