<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\UserController;
use App\Http\Middleware\Authenticate;
use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\PostController;

Route::middleware([Authenticate::class])->group(function (){
    Route::get('/', [ PostController::class, 'index' ])->name('post.index');
    Route::get('/post/{id}', [ PostController::class, 'show'])->name('post.show');
    Route::get('/user/{id}', [ UserController::class, 'show'])->name('user.show');

    Route::post('/postI', [PostController::class, 'storeI'])->name('post.storeI');
    Route::post('/postT', [PostController::class, 'storeT'])->name('post.storeT');
    Route::post('logout', [AuthController::class, 'logout'])->name('auth.logout');
    Route::post('/usersettings/{id}',[UserController::class, 'edit'])->name('user.edit');
    Route::post('/comment', [CommentController::class, 'store'])->name('comment.store');
    Route::post('/follow', [UserController::class, 'follow'])->name('user.follow');

    Route::delete('/post',[PostController::class, 'destroy'])->name('post.destroy');
    Route::delete('/comment',[CommentController::class, 'destroy'])->name('comment.destroy');
    Route::delete('/unfollow', [UserController::class, 'unfollow'])->name('user.unfollow');


    Route::patch('/like/{id}', [PostController::class, 'like'])->name('post.like');
});


Route::get('/login', [AuthController::class, 'login'])->name('login');
Route::get('/signup', [AuthController::class, 'signup'])->name('auth.signup');

Route::post('/login',[AuthController::class, 'connect'])->name('auth.connect');
Route::post('/signup',[AuthController::class, 'store'])->name('auth.store');
