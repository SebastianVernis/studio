<?php

require __DIR__ . '/../vendor/autoload.php';

use OpenAI\Client;

class LogoGenerator
{
    private $client;

    public function __construct()
    {
        $this->client = OpenAI::client(getenv('OPENAI_API_KEY'));
    }

    public function generate($description, $style)
    {
        $prompt = "A logo for a company with the following description: '{$description}'. The style of the logo should be '{$style}'.";

        $response = $this->client->images()->create([
            'model' => 'dall-e-3',
            'prompt' => $prompt,
            'n' => 1,
            'size' => '1024x1024',
            'response_format' => 'b64_json',
        ]);

        return $response->data[0]->b64_json;
    }

    public function refine($existingLogo, $description, $style, $refinementPrompt)
    {
        $prompt = "A logo for a company with the following description: '{$description}'. The style of the logo should be '{$style}'. The user wants to refine the logo with the following instructions: '{$refinementPrompt}'. The existing logo is provided as a reference.";

        $response = $this->client->images()->create([
            'model' => 'dall-e-3',
            'prompt' => $prompt,
            'n' => 1,
            'size' => '1024x1024',
            'response_format' => 'b64_json',
        ]);

        return $response->data[0]->b64_json;
    }
}
