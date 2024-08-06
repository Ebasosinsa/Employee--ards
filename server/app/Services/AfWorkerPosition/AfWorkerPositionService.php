<?php

namespace App\Services\AfWorkerPosition;
use App\Models\AfWorkerPosition;

class AfWorkerPositionService{
  public function getItems(){
      return AfWorkerPosition::all();
  }
}