<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Post;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class PostController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Home',[
            'Posts' => Post::with('user')->orderBy('created_at', 'DESC')->get(),
            'ConnectUser' => Auth::user(),
        ]);
    }
    public function show(string $id): Response
    {
        return Inertia::render('Post',[
            'post' => Post::with('user')->findOrFail($id),
            'comments' => Comment::with('user')->where('post_id', $id)->get(),
            'ConnectUser' => Auth::user()
        ]);
    }

    public function storeI(Request $request): RedirectResponse
    {
        $payload = $request->validate([
            'file' => 'required|mimes:png,jpg,jpeg,gif|max:10240',
            'size' => ['required'],
            'description' => ['required', 'min:1', 'max:300'],
        ]);
        $path = $request->file('file')->store('posts');
        $path = '/storage/' . $path;

        Post::create([
            'file' => $path,
            'size' => $payload['size'],
            'description' => $payload['description'],
            'user_id' => Auth::user()['id'],
            'type_post' => 1,
            'like' => 0
        ]);
        return back();
    }
    public function storeT(Request $request): RedirectResponse
    {
        $payload = $request->validate([
            'size' => ['required'],
            'description' => ['required', 'min:1', 'max:300'],
        ]);

        Post::create([
            'file' => null,
            'size' => $payload['size'],
            'description' => $payload['description'],
            'user_id' => Auth::user()['id'],
            'type_post' => 2,
            'like' => 0
        ]);
        return back();
    }
}
