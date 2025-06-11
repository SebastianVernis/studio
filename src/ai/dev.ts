
import { config } from 'dotenv';
config();

import '@/ai/flows/generate-logo.ts';
// It's good practice to ensure all flows are imported if the dev server relies on explicit imports
// For Genkit, defineFlow usually registers itself, but this ensures it's loaded.
// If refineLogoFlow is in generate-logo.ts, it's already covered.
