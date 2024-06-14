<?php
/* Сервис категорий рабочих */ 

namespace App\Services\WorkerCategory;

class WorkerCategoryService { 

  public function getItems(){
    return Status::all();
  }

}
