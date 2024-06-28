<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AddDepartments extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //Сид добавления записей для Филиалов фирмы
        DB::table('worker_departments')->insert([
            [
                'name_departments' => "ООО «ГТ Север»",
            ],

            [
                'name_departments' => "ООО «Арктик-Флот»",
            ]
            ,

            [
                'name_departments' => "ООО \"ЭТЦ\"АЛЬФА\"",
            ]
        ]);
    }
}
