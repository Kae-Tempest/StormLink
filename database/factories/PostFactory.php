<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'type_post' => fake()->numberBetween(1,2),
            'size' => fake()->numberBetween(1,2),
            'description' => Str::random(50),
            'file' => fake()->imageUrl(),
            'like' => fake()->numberBetween(0,38947509)
        ];
    }
}
