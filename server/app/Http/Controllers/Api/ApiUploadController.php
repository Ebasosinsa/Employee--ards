<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Upload;
use App\Models\WorkerInfo;
use Illuminate\Support\Facades\Log;

class ApiUploadController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $uploads = WorkerInfo::all(); // Получение всех записей из таблицы
        return view('uploads.index', compact('uploads')); // Передача данных в представление
    }

    public function upload(Request $request)
    {
      // Валидация запроса
      $request->validate([
        'file' => 'required|file|mimes:jpg,jpeg,png,pdf', // Укажите допустимые форматы файлов и максимальный размер в килобайтах
    ]);

    // Проверка наличия файла в запросе
    if ($request->hasFile('file')) {
        $file = $request->file('file');

        // Получение оригинального имени файла
        $originalName = $file->getClientOriginalName();

        // Сохранение файла в директорию 'public/storage/uploads'
         $path = $file->storeAs('public/uploads', $originalName, 'public_uploads');

        return response()->json([
            'message' => 'File uploaded successfully',
            'path' => $path
        ], 200);
    } else {
        return response()->json([
            'error' => 'No file uploaded'
        ], 400);
    }
    }
 

    /*public function view()
    {
        $files = Storage::files('uploads'); // Получаем список загруженных файлов
        return response()->json(['files' => $files]);
    }*/
    

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    
}
