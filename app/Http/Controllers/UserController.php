<?php

namespace App\Http\Controllers;

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
            'ConnectUser' => Auth::user()
        ]);
    }

    public function edit(string $id, Request $request)
    {
        $payload = $request->validate([
            'avatar' => ['mimes:png,jpg,jpeg,gif|max:10240','nullable'],
            'username' => ['string', 'max:12', 'nullable'],
            'bio' => ['string', 'max:300','nullable'],
            'old_pass' => ['string', 'min:4','nullable'],
            'new_pass' => ['string', 'min:4','nullable'],
        ]);
        $user = User::find($id);
        if(!$payload){return back()->withErrors([
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
        } else if(!$payload['old_pass'] and $payload['new_pass'] or $payload['old_pass'] and !$payload['new_pass']) {
            return back()->withErrors(['msg' => 'Missing old password or new password']);
        }

        $user->save();

        return back();
    }
}
