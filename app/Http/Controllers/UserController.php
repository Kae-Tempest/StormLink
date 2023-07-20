<?php

namespace App\Http\Controllers;

use App\Models\Follows;
use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Inertia\Response;

class UserController extends Controller
{
    public function show(string $id): Response
    {
        return Inertia::render('User',[
            'user' => User::where('id', $id)->first(),
            'posts' => Post::where('user_id', $id)->orderBy('created_at', 'DESC')->get(),
            'ConnectUser' => Auth::user(),
            'followers' => Follows::where('followed_id', $id)->get(),
            'followed' => Follows::where('follower_id', $id)->get()
        ]);
    }

    public function follow(Request $request): void
    {
        $payload = $request->validate([
            'followed_id' => ['required', 'integer'],
        ]);
        Follows::create([
            'follower_id' => Auth::user()['id'],
            'followed_id' => $payload['followed_id'],
        ]);
    }
    public function unfollow(Request $request): void
    {
        $payload = $request->validate([
            'followed_id' => ['required', 'integer'],
        ]);

        $follow = Follows::where('followed_id', $payload['followed_id']);
        $follow->delete();
    }

    public function search(Request $request)
    {
        $payload = $request->validate(['search' => 'string|required']);

        return User::where('username','like','%'.$payload['search'].'%')->get();
    }


    public function edit(string $id, Request $request)
    {
        $payload = $request->validate([
            'avatar' => ['mimes:png,jpg,jpeg,gif','nullable'],
            'username' => ['string', 'max:12', 'nullable'],
            'bio' => ['string', 'max:300','nullable'],
            'old_pass' => ['string', 'min:4','nullable'],
            'new_pass' => ['string', 'min:4','nullable'],
        ]);
        $user = User::find($id);

        if(!$payload['username'] && !$payload['bio'] && !$payload['old_pass'] && !$payload['new_pass'] && !$payload['avatar']){return back()->withErrors([
            'msg' => 'Missing data or File Error'
        ]);}
        if($request->file('avatar')) {
            $path = $request->file('avatar')->store('avatars');
            $path = '/storage/' . $path;
            $user->avatar = $path;
        }
        if ($payload['username']) {$user->username = $payload['username'];}
        if ($payload['bio']){$user->bio = $payload['bio'];}
        if($payload['old_pass'] and $payload['new_pass']){
            if ($payload['old_pass'] == $payload['new_pass']) {return back()->withErrors(['msg' => 'Password are identical']);}
            $user->password = Hash::make($payload['new_pass']);
        }

        $user->save();

        return back();
    }
}
