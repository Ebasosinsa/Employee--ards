<?php

namespace App\Services\GtWorkerPosition;
use App\Models\GtWorkerPosition;

class GtWorkerPositionService{
  public function getItems(){
      return GtWorkerPosition::all();
  }
}