<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\LikedPost;
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
            'comments' => Comment::with('user')->where('post_id', $id)->orderBy('created_at', 'DESC')->get(),
            'ConnectUser' => Auth::user(),
            'likedPost' => LikedPost::where('user_id', Auth::user()['id'])->where('post_id', $id)->first()
        ]);
    }

    public function storeI(Request $request): RedirectResponse
    {
        $payload = $request->validate([
            'file' => 'required|mimes:png,jpg,jpeg,gif|max:10240',
            'size' => ['required'],
            'description' => ['min:1', 'max:300','nullable'],
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

    public function destroy(Request $request)
    {
        $post = Post::find($request['post_id']);
        $comments = Comment::where('post_id', $request['post_id']);
        $likedPosts = LikedPost::where('post_id', $request['post_id']);
        $likedPosts->delete();
        $comments->delete();
        $post->delete();
    }

    public function like(String $id, Request $request)
    {
        $post = Post::find($id);
        $post->like = $request['like'];
        $isLike = LikedPost::where('user_id', Auth::user()['id'])->where('post_id',$id)->first();
        if(!$isLike) {
            LikedPost::create([
                'user_id' => Auth::user()['id'],
                'post_id' => $id,
                'liked' => true
            ]);
        } else {
            $isLike->liked = !$isLike->liked;
            $isLike->save();
        }
        $post->save();
    }
}
