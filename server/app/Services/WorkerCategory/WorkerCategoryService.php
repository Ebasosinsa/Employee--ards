<?php
/* Сервис категорий рабочих */ 

namespace App\Services\WorkerCategory;
use App\Models\worker_category;

class WorkerCategoryService { 

  public function getItems(){
    return worker_category::all();
  }

}
