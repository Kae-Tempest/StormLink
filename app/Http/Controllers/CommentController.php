<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CommentController extends Controller
{
    public function store(Request $request) {
        $payload = $request->validate([
           'content' => ['string','required','min:1','max:300'],
           'post_id' => ['integer','required']
        ]);
        Comment::create([
            'content' => $payload['content'],
            'user_id' => Auth::user()['id'],
            'post_id' => $payload['post_id'],
            'like' => 0
        ]);
        return to_route('post.show', ['id' => $payload['post_id']]);
    }

    public function destroy(Request $request)
    {
        $comment = Comment::find($request['comment_id']);
        $comment->delete();
    }
}
