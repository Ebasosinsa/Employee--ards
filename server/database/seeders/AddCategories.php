<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AddCategories extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //Сид добавления записей для Категории сотрудников
        DB::table('worker_categories')->insert([
            [
                'name_categories' => "ИТР",
            ],
            
            [
                'name_categories' => "Рабочие",
            ]
        ]);
    }
}
