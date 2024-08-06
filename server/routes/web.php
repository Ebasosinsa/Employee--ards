<?php

use App\Http\Controllers\Api\ApiController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ApiWorkerInfo;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something gre at!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::resource('workerinfo', ApiWorkerInfo::class);
//Route::get('/api/workerdepartment', 'Api\ApiDepartment@index');
//Route::get('/api/workercategory', 'Api\ApiCategory@index');