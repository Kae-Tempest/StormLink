<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <link rel="icon" type="image/png" href="/assets/TempestLogo.png">
    <title>Storm</title>
    @vite('resources/js/app.js')
    @inertiaHead
</head>
    <body class="relative bg-fixed bg-[url(../assets/backgroundLogo1000.png)] bg-no-repeat bg-center bg-contain">
        <div class="relative min-h-screen">
            @inertia
        </div>
    </body>
</html>