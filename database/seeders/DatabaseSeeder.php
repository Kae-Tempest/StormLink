<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Comment;
use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
//         \App\Models\User::factory(10)->create()->each(
//             fn ($user) => $user->posts()->saveMany(\App\Models\Post::factory(5)->make())
//         );

        User::factory()->has(Post::factory()->count(5)->has(Comment::factory()->count(5)))->create();

    }
}
