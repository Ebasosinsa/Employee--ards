<?php

namespace App\Services\EtcWorkerPosition;
use App\Models\EtcWorkerPosition;

class EtcWorkerPositionService{
  public function getItems(){
      return EtcWorkerPosition::all();
  }
}