export type user = {
  id: number;
  username: string;
  email: string;
  password: string;
  role_id: number;
  avatar: File | null;
  nb_follower: number;
  nb_followed: number;
  twitch_id: string | null;
  remember_me_token: boolean | null;
  created_at: string;
  updated_at: string;
};
