"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { Download, ImageIcon, Loader2, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { generateLogo, type GenerateLogoInput } from "@/ai/flows/generate-logo";

const LOGO_STYLES = [
  "Neon",
  "Cyberpunk",
  "Origami",
  "Minimalist",
  "Vintage",
  "Abstract",
  "Graffiti",
  "Pixel Art",
  "Watercolor",
  "Geometric",
] as const;

const formSchema = z.object({
  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters." })
    .max(300, { message: "Description must not exceed 300 characters." }),
  style: z.enum(LOGO_STYLES),
});

type FormValues = z.infer<typeof formSchema>;

export default function LogoGenerator() {
  const [generatedLogo, setGeneratedLogo] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: "",
      style: "Neon",
    },
  });

  const selectedStyle = form.watch("style");

  const onSubmit: SubmitHandler<FormValues> = async (data) : Promise<void> => {
    setIsLoading(true);
    setGeneratedLogo(null); // Clear previous logo

    try {
      const input: GenerateLogoInput = {
        description: data.description,
        style: data.style,
      };
      const result = await generateLogo(input);
      
      if (result.logoDataUri) {
        setGeneratedLogo(result.logoDataUri);
        toast({
          title: "Logo Generated!",
          description: `Your ${data.style} logo is ready.`,
          variant: "default",
        });
      } else {
        throw new Error("AI did not return a logo. Please try again.");
      }
    } catch (error) {
      console.error("Error generating logo:", error);
      let errorMessage = "Failed to generate logo. Please try again.";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
      setGeneratedLogo(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = () => {
    if (!generatedLogo) return;
    const link = document.createElement("a");
    link.href = generatedLogo;
    
    const mimeTypeMatch = generatedLogo.match(/^data:(image\/[^;]+);base64,/);
    const mimeType = mimeTypeMatch ? mimeTypeMatch[1] : 'image/png';
    let extension = 'png';

    if (mimeType === 'image/jpeg') extension = 'jpg';
    else if (mimeType === 'image/svg+xml') extension = 'svg';
    else if (mimeType === 'image/webp') extension = 'webp';
    // Add more types if needed, default to png

    link.download = `chispart-logo-${selectedStyle.toLowerCase().replace(/\s+/g, "-")}.${extension}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast({
      title: "Logo Downloaded!",
      description: `Your ${selectedStyle} logo has been saved as ${link.download}.`,
    });
  };

  return (
    <Card className="w-full max-w-2xl shadow-2xl bg-card/80 backdrop-blur-sm border-primary/20">
      <CardHeader>
        <div className="flex items-center space-x-2 mb-2">
            <Sparkles className="w-6 h-6 text-primary" />
            <CardTitle className="text-2xl font-headline">Create Your Logo</CardTitle>
        </div>
        <CardDescription className="text-muted-foreground">
          Fill in the details below to generate your unique AI-powered logo.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-6">
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Logo Name or Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., A futuristic tech company called 'NovaSpark'"
                      className="resize-none min-h-[100px] bg-input/70 focus:bg-input"
                      {...field}
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormDescription>
                    Describe your brand or what you want the logo to represent.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="style"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Logo Style</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    disabled={isLoading}
                  >
                    <FormControl>
                      <SelectTrigger className="bg-input/70 focus:bg-input">
                        <SelectValue placeholder="Select a style" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="max-h-60 bg-popover">
                      {LOGO_STYLES.map((style) => (
                        <SelectItem key={style} value={style}>
                          {style}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Choose a visual style for your logo.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
             <div className="mt-6">
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-5 w-5" />
                      Generate Logo
                    </>
                  )}
                </Button>
              </div>
          </CardContent>
        </form>
      </Form>
     
      {(generatedLogo || isLoading) && (
        <CardFooter className="flex-col items-center pt-6 border-t border-border mt-6">
           <h3 className="text-xl font-headline mb-4 text-foreground">Your Generated Logo</h3>
          {isLoading && !generatedLogo && (
            <div className="w-full aspect-square bg-muted/30 rounded-lg flex items-center justify-center flex-col text-muted-foreground p-8 border-2 border-dashed border-border animate-pulse">
              <Loader2 className="w-16 h-16 mb-4 animate-spin text-primary" />
              <p className="text-center">Generating your masterpiece...</p>
            </div>
          )}
          {generatedLogo && (
            <div className="w-full max-w-sm aspect-square rounded-lg overflow-hidden shadow-lg border border-accent/30 bg-muted/10 mb-6 transition-all duration-500 ease-in-out transform hover:scale-105">
              <img
                src={generatedLogo}
                alt={`${selectedStyle} logo for ${form.getValues("description").substring(0,30)}`}
                className="w-full h-full object-contain animate-fadeIn"
                data-ai-hint="generated logo"
              />
            </div>
          )}
          {generatedLogo && !isLoading && (
            <Button
              onClick={handleDownload}
              variant="outline"
              className="w-full max-w-sm border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Logo
            </Button>
          )}
        </CardFooter>
      )}

      {!generatedLogo && !isLoading && (
         <CardFooter className="flex-col items-center pt-6 border-t border-border mt-6">
            <div className="w-full aspect-square bg-muted/30 rounded-lg flex items-center justify-center flex-col text-muted-foreground p-8 border-2 border-dashed border-border">
                <ImageIcon className="w-16 h-16 mb-4 text-primary/50" />
                <p className="text-center">Your generated logo will appear here.</p>
                <p className="text-xs text-center mt-1">
                Enter a description, select a style, and click "Generate Logo".
                </p>
            </div>
        </CardFooter>
      )}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </Card>
  );
}
