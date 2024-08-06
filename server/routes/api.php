<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ApiGtWorkerPosition;
use App\Http\Controllers\Api\ApiEtcWorkerPosition;
use App\Http\Controllers\Api\ApiWorkerInfo;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/



Route::middleware('api')->group( function () {
  Route::resource('workercategory', 'Api\ApiCategory');
  Route::resource('workerdepartment', 'Api\ApiDepartment');
  Route::resource('workergtpositions', 'Api\ApiGtWorkerPosition');
  Route::get('gt-workerpositions-filter', 'Api\ApiGtWorkerPosition@filter');
  Route::get('af-workerpositions-filter', 'Api\ApiAfWorkerPosition@filter');
  Route::get('etc-workerpositions-filter', 'Api\ApiEtcWorkerPosition@filter');


});