<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\WorkerInfo;
use Illuminate\Http\Request;

class ApiWorkerInfo extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(){
        $workerInfo = WorkerInfo::all();
        // $workerInfo = WorkerInfo::all('fio_worker', 'departments_worker')
        //     ->where('departments_worker', '2')
        //     ->toArray();
        // return $workerInfo;

        $workerInfo = WorkerInfo::all()->toArray();
        return $workerInfo;
    }
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
        // // Валидация запроса
        $request->validate([
            'fio_worker' => 'required',
            'file' => 'file|mimes:jpg,jpeg,png,pdf', // Укажите допустимые форматы файлов и максимальный размер в килобайтах\
            'birthday_worker' => 'date',
            ]);
            $originalNamePath  = null;
            
            // Проверка наличия файла в запросе
            if ($request->hasFile('file')) {
            $file = $request->file('file');
    
            // Получение оригинального имени файла
            $originalName = $file->getClientOriginalName();
            // Сохранение файла в директорию 'public/storage/uploads'
            // Получить файл можно по URL /storage/uploads/имя_файла
            $file->storeAs('public/uploads', $originalName, 'public_uploads');
            $originalNamePath = $originalName;
            }
        $workerInfo = new WorkerInfo;
        $workerInfo -> fio_worker = $request -> fio_worker;
        $workerInfo -> categories_worker = $request -> categories_worker;
        $workerInfo -> positions_worker = $request -> positions_worker;
        $workerInfo -> birthday_worker = $request ->  birthday_worker;
        $workerInfo -> departments_worker = $request -> departments_worker;
        $workerInfo -> gender_worker = $request -> gender_worker;
        $workerInfo -> competency_worker = $request -> competency_worker;
        $workerInfo -> date_hiring_worker = $request -> date_hiring_worker;
        $workerInfo -> photo_worker = $originalNamePath;
        $workerInfo -> note_worker = $request -> note_worker;
        $result = $workerInfo -> save();
        return response()->json([
            'message' => 'Route saved successfully',
            'route' => $workerInfo
        ], 201);

}

    
    // В Возврат добавленных данных для продолжения
    /*public function store(Request $request,  )
    {
        $request->validate([
            'fio_worker' => 'required',
            'categories_worker' => 'required',
        ]);
        $workerInfo = $request;
        $fio_worker = $request -> fio_worker;
        WorkerInfo::create($workerInfo->all());

        return (['id', WorkerInfo::select('fio_worker','categories_worker')->where('fio_worker', $fio_worker)->get()]);
    }*/


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id_worker)
    {
        $workerInfo = WorkerInfo::findOrFail($id_worker);
        // $workerInfo = WorkerInfo::all('fio_worker', 'departments_worker')
        //     ->where('departments_worker', '2')
        if (!$workerInfo) {
            return response()->json(['message' => 'Worker info not found'], 404);
        }

        return response()->json($workerInfo, 200);
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
    public function update(Request $request, $id_worker)
{
    $workerInfo = WorkerInfo::findOrFail($id_worker); // Используем id_worker для поиска
    $request->validate([
        'fio_worker' => 'required',
        'file' => 'file|mimes:jpg,jpeg,png,pdf', // Укажите допустимые форматы файлов и максимальный размер в килобайтах\
        'birthday_worker' => 'date',
        ]);   
    $fields = $request->keys(); // Получаем список полей, которые были переданы в запросе
    return response()->json(['message' => 'Worker updated successfully', 'data' => $fields]);   
    $workerInfo->fill($request->only($fields)); // Обновляем только те поля, которые были переданы в запросе
        
    $workerInfo->save(); // Сохраняем изменения
        
    return response()->json(['message' => 'Worker updated successfully', 'data' => $workerInfo]);
}

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id_worker)
    {
        // Находим запись по первичному ключу (id_worker)
        $workerInfo = WorkerInfo::findOrFail($id_worker);
        if (!$workerInfo) {
            return response()->json(['message' => 'Worker info not found'], 404);
        }
        // Удаляем найденную запись
        $workerInfo->delete();
        // Возвращаем успешный ответ
        return response()->json(['message' => 'Worker info deleted successfully'], 200);
    }
        
}
