<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use PhpParser\Node\Stmt\Return_;

class WorkerInfo extends Model
{
    use HasFactory;
    protected $fillable = [];

    public function department() {
    return $this->belonsTo(WorkerDepartment::class);
    }

    public function caregory() {
        return $this->belonsTo(WorkerCaregory::class);
    }
    
}

