<div class="w-full max-w-2xl shadow-2xl bg-card/80 backdrop-blur-sm border-primary/20">
    <div class="p-6">
        <div class="flex items-center space-x-2 mb-2">
            <span class="w-6 h-6 text-primary">S</span>
            <h2 class="text-2xl font-headline">Create Your Logo</h2>
        </div>
        <p class="text-muted-foreground">
            Fill in the details below to generate your unique AI-powered logo.
        </p>
    </div>
    <form action="" method="post">
        <div class="p-6 space-y-6">
            <div>
                <label for="description" class="block text-sm font-medium text-gray-700">Logo Name or Description</label>
                <textarea id="description" name="description" rows="4" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="e.g., A futuristic tech company called 'NovaSpark', blue and silver, sharp edges"></textarea>
                <p class="mt-2 text-sm text-gray-500">Describe your brand, desired elements, colors, and what you want the logo to represent.</p>
            </div>
            <div>
                <label for="style" class="block text-sm font-medium text-gray-700">Logo Style</label>
                <select id="style" name="style" class="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                    <option>Neon</option>
                    <option>Cyberpunk</option>
                    <option>Origami</option>
                    <option>Minimalist</option>
                    <option>Vintage</option>
                    <option>Abstract</option>
                    <option>Graffiti</option>
                    <option>Pixel Art</option>
                    <option>Watercolor</option>
                    <option>Geometric</option>
                    <option>Flat</option>
                    <option>3D Render</option>
                    <option>Hand-drawn</option>
                    <option>Futuristic</option>
                    <option>Retro</option>
                </select>
                <p class="mt-2 text-sm text-gray-500">Choose a visual style for your logo.</p>
            </div>
            <div class="mt-6">
                <button type="submit" class="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6">
                    <span>S</span>
                    Generate Logo
                </button>
            </div>
        </div>
    </form>
    <div class="p-6 flex-col items-center pt-6 border-t border-border mt-6">
        <h3 class="text-xl font-headline mb-4 text-foreground">
            Your Generated Logo
        </h3>
        <div class="w-full aspect-square bg-muted/30 rounded-lg flex items-center justify-center flex-col text-muted-foreground p-8 border-2 border-dashed border-border">
            <span class="w-16 h-16 mb-4 text-primary/50">I</span>
            <p class="text-center">Your generated logo will appear here.</p>
            <p class="text-xs text-center mt-1">
                Enter a description, select a style, and click "Generate Logo".
            </p>
        </div>
    </div>
</div>
