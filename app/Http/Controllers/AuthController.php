<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class AuthController extends Controller
{
    public function login(): Response
    {
        return Inertia::render('Login');
    }

    public function signup(): Response
    {
        return Inertia::render('SignUp');
    }

    public function store(Request $request): RedirectResponse {
        $credentials = $request->validate([
            'username' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:4'],
        ]);

        User::create([
            'username' => $credentials['username'],
            'email' => Str::lower($credentials['email']),
            'password' => $credentials['password'],
            'role_id' => 1,
            'bio'=> '',
            'avatar' => '/assets/defaultUser.png',
            'nb_follower' => 0,
            'nb_followed' => 0,
            'twitch_id' => ''
        ]);
        Auth::attempt([
            'email' =>  Str::lower($credentials['email']),
            'password' => $credentials['password']
        ]);
        $request->session()->regenerate();
        return redirect('/');
    }

    public function connect(Request $request): RedirectResponse
    {
        $credentials = $request->validate([
            'email' => ['required','email'],
            'password' => ['required']
        ]);

        if(Auth::attempt([
            'email' =>  Str::lower($credentials['email']),
            'password' => $credentials['password']
        ])) {
            $request->session()->regenerate();

            return redirect('/');
        }

        return back()->withErrors([
            'msg' => 'One of Credential is wrong or does not exist'
        ]);
    }

    public function logout(Request $request): RedirectResponse
    {
        Auth::logout();
        return redirect('/login');
    }
}
