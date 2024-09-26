<!DOCTYPE html>
<html>
<head>
    <title>Список загруженных файлов</title>
</head>
<body>
    <h1>Загруженные файлы</h1>
    
    @if ($uploads->isEmpty())
        <p>No files uploaded.</p>
    @else
        <ul>
            @foreach ($uploads as $upload)
                <li>
                    <a href="{{ asset($upload->file_path) }}">{{ basename($upload->file_path) }}</a>
                </li>
            @endforeach
        </ul>
    @endif
</body>
</html>