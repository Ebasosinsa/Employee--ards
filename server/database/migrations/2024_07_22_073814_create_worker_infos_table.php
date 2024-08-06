<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWorkerInfosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('worker_infos', function (Blueprint $table) {
            $table->id('id_worker');                                            /*Ид работника   */
            $table->string('fio_worker');                                       /*ФИО сотрудника */
            $table->date('birthday_worker');                                    /*День рождения работника */
            $table->boolean('gender_worker');                                    /*Пол работника */

            
            $table->unsignedBigInteger('departments_worker')->unsigned();       /*Филиал */
            $table->foreign('departments_worker')->references('id_departments')->on('worker_departments');

            $table->unsignedBigInteger('positions_worker')->unsigned();         /*Должность сотрудника */

            $table->string('competency_worker');                                /*Разряд сотрудника */                 

            $table->unsignedBigInteger('categories_worker')->unsigned();        /*Категория сотрудника */
            $table->foreign('categories_worker')->references('id_categories')->on('worker_caregories');

            $table->date('date_hiring_worker');                                 /*Дата найма сотрудника */  
            $table->date('date_layoff_worker');                                 /*Дата увольнения сотрудника */
            $table->string('note_worker')->nullable();                          /*Примечание */       
            $table->string('photo_worker');                                     /*Фото сотрудника */  
            $table->timestamps();                                               /*Дата добавления в базу */  
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('worker_infos');
    }
}
