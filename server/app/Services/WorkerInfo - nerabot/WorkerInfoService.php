<?php

namespace App\Services\WorkerInfo;

use App\Models\WorkerInfo;
use Illuminate\Http\Request;

class WorkerInfoService1111 {

  public function saveItems(Request $request, WorkerInfo $workerinfo){
    dd('oke');
   /* $workerinfo = WorkerInfo::create([
      'fio_worker' => $request->fio_worker,
      'birthday_worker' => $request->birthday_worker,
      'departments_worker' => $request->departments_worker,
      'categories_worker' => $request->categories_worker,
      'positions_worker' => $request->positions_worker,
  ]);
    dd($workerinfo);
    $workerinfo->fill($request->only($workerinfo->getFillable()));
    $workerinfo->save();
    return $workerinfo;*/

    
  }
  public function getItems(){
    return WorkerInfo::all();
    dd('oke');
}

}