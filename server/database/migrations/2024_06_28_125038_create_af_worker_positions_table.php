<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAfWorkerPositionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('af_worker_positions', function (Blueprint $table) {
            $table->id('id_af_worker_positions');                               /*Ид должности*/  
            $table->string('name_af_worker_positions');                         /*Название должности*/                     
            $table->string('karta_af_worker_positions');                        /*Карта должности*/
            $table->string('factors_af_worker_positions');                      /*Вредные и опасные факторы должности*/
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('af_worker_positions');
    }
}
