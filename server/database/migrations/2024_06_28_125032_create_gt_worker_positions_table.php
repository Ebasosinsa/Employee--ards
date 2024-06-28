<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGtWorkerPositionsTable extends Migration
{
    /**
     * Run the migrations.-
     *
     * @return void
     */
    public function up()
    {
        Schema::create('gt_worker_positions', function (Blueprint $table) {
            $table->id('id_gt_worker_positions');                               /*Ид должности*/  
            $table->string('name_gt_worker_positions');                         /*Название должности*/                     
            $table->string('karta_gt_worker_positions');                        /*Карта должности*/
            $table->string('factors_gt_worker_positions');                      /*Вредные и опасные факторы должности*/
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('gt_worker_positions');
    }
}
