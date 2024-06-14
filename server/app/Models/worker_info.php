<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class worker_info extends Model
{
    use HasFactory;

    public function worker_departments(){
        return $this->belongsTo(Worker_departments::class);
    }

    public function worker_category(){
        return $this->belongsTo(Worker_category::class);
    }
}
