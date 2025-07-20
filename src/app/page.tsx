import LogoGenerator from '@/components/logo-generator';
import { DraftingCompass } from 'lucide-react'; // Using DraftingCompass as a more "design" oriented icon

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-4 sm:p-8 selection:bg-primary/30 selection:text-primary-foreground">
      <header className="mb-8 sm:mb-12 text-center max-w-3xl">
        <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4 shadow-md">
          <DraftingCompass className="w-10 h-10 sm:w-12 sm:h-12 text-primary" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-headline font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary/70 mb-3 leading-tight">
          CHISPART Logo
        </h1>
        <p className="text-md sm:text-lg text-muted-foreground">
          Generate stunning logos with AI. Describe your vision, pick a style, and let us craft your unique brand identity in seconds.
        </p>
      </header>
      
      <LogoGenerator />
      
      <footer className="mt-12 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} CHISPART. All rights reserved.</p>
        <p>Powered by Generative AI</p>
      </footer>
    </div>
  );
}
