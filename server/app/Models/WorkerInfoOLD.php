<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use PhpParser\Node\Stmt\Return_;

class WorkerInfo extends Model
{
    use HasFactory;

    protected $table = 'worker_infos';
    
    protected $fillable = ['fio_worker',
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


    public function department() {
    return $this->belonsTo(WorkerDepartment::class);
    }

    public function caregory() {
        return $this->belonsTo(WorkerCaregory::class);
    }


    
}

