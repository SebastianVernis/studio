<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CHISPART Logo</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-4 sm:p-8 selection:bg-primary/30 selection:text-primary-foreground">
    <header class="mb-8 sm:mb-12 text-center max-w-3xl">
        <div class="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4 shadow-md">
            <span class="w-10 h-10 sm:w-12 sm:h-12 text-primary">C</span>
        </div>
        <h1 class="text-4xl sm:text-5xl font-headline font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary/70 mb-3 leading-tight">
            CHISPART Logo
        </h1>
        <p class="text-md sm:text-lg text-muted-foreground">
            Generate stunning logos with AI. Describe your vision, pick a style, and let us craft your unique brand identity in seconds.
        </p>
    </header>

    <main>
        <?php include '../views/logo-generator.php'; ?>
    </main>

    <footer class="mt-12 text-center text-sm text-muted-foreground">
        <p>&copy; <?php echo date("Y"); ?> CHISPART. All rights reserved.</p>
        <p>Powered by Generative AI</p>
    </footer>
</body>
</html>
