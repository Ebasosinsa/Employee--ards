<?php

namespace App\Services\WorkerCategory;
use App\Models\WorkerCaregory;

class WorkerCategoryService{
  public function getItems(){
      return WorkerCaregory::all();
  }
}