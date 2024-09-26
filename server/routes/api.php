<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use \app\http\Controllers\Api\ApiUploadController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::middleware('api')->group( function () {
    Route::resource('workercategory', 'Api\ApiCategory');
    Route::resource('workerdepartment', 'Api\ApiDepartment');
    Route::resource('workergtpositions', 'Api\ApiGtWorkerPosition');
    Route::get('gt-workerpositions-filter', 'Api\ApiGtWorkerPosition@filter');
    Route::get('af-workerpositions-filter', 'Api\ApiAfWorkerPosition@filter');
    Route::get('etc-workerpositions-filter', 'Api\ApiEtcWorkerPosition@filter');
    Route::resource('all-worker-positions', 'Api\AllPositionsController');
    Route::resource('workerinfo', 'Api\ApiWorkerInfo');
    Route::resource('upload', 'Api\ApiUploadController');
    Route::get('uploads', 'Api\ApiUploadController@index')->name('uploads.index');
    Route::post('upload', 'Api\ApiUploadController@upload');
  });
