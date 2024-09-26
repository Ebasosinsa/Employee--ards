<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WorkerInfo extends Model
{
    use HasFactory;

    protected $primaryKey = 'id_worker';
    
    protected $fillable = [
        'fio_worker',
        'categories_worker',
        'positions_worker',
        'birthday_worker',
        'departments_worker',
        'gender_worker',
        'competency_worker',
        'date_hiring_worker',
        'date_layoff_worker',
        'note_worker',
        'date_layoff_worker',
        'photo_worker',
    ];
}
